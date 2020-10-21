import * as React from 'react';
import Typography from 'typography/typography';
import { Form } from 'antd';
import { GetFieldDecoratorOptionsType, FormProp } from 'types/formTypes';
import { TypographyProps } from 'types/typographyTypes';
import * as styles from './formItem.module.less';
import './formItem.less';

interface Props {
  children: React.ReactNode;
  errorMessage?: string | React.ReactNode;
  fieldName: string;
  form?: FormProp;
  initialValue?: any;
  isSuccess?: boolean;
  label?: string;
  labelType?: 'normal' | 'blue';
  layout?: 'horizontal' | 'vertical';
  required?: boolean;
  requiredMessage?: string;
  type?: string;
  typeMessage?: string;
}

const FormItem: React.FC<Props> = ({
  children,
  errorMessage = null,
  fieldName,
  form,
  initialValue = null,
  isSuccess = false,
  label = null,
  labelType = 'normal',
  layout = 'vertical',
  required = false,
  requiredMessage = null,
  type = null,
  typeMessage = false,
}) => {
  const rules = [];
  if (required && requiredMessage) {
    rules.push({ message: requiredMessage, required });
  }
  if (type && typeMessage) {
    rules.push({ message: typeMessage, type });
  }

  const options: GetFieldDecoratorOptionsType = {
    initialValue,
    rules,
  };

  if (type && typeMessage) {
    options.validateTrigger = 'onBlur';
  }

  const finalOptions = errorMessage ? undefined : options;

  const getStatus = (): 'error' | 'success' => {
    if (errorMessage) {
      return 'error';
    }
    if (isSuccess) {
      return 'success';
    }

    return undefined;
  };

  return (
    <div className={styles[layout]}>
      {
        label && (
          <div className={styles.typographyDiv}>
            <Typography
              color={labelType === 'blue' ? 'blue' : 'black'}
              size={labelType === 'blue' ? 'normal' : 'three'}
              text={label}
              weight={labelType === 'blue' ? 'regular' : 'bold'}
            />
          </div>
        )
      }
      <Form.Item
        hasFeedback={isSuccess || undefined}
        help={errorMessage || undefined}
        validateStatus={getStatus()}
      >
        {
          form.getFieldDecorator(fieldName, finalOptions)(children)
        }
      </Form.Item>
    </div>
  );
};

export default FormItem;
