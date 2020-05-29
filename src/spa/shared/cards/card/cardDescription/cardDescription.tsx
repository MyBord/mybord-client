import * as React from 'react';

interface Props {
  Description: React.FC;
}

const CardDescription: React.FC<Props> = ({ Description }) => <Description />;

export default CardDescription;
