// *1: `extraRefs` are additional refs that are part of the `Content` component, that when
// clicked, we don't want to close said popover.

import * as React from 'react';
import PopOverAnimation from 'animations/popOverAnimation';
import Portal from 'portal/portal';
import { ExtraRefs, PopOverProps, PopOverStyle } from 'types/modalTypes';
import PopOverCaret from './popOverCaret/popOverCaret';
import getPopOverStyle from './getPopOverStyle';
import popOverMouseActions from './popOverMouseActions/popOverMouseActions';

interface Props extends PopOverProps {
  Content: React.ReactElement;
}

const PopOver: React.FC<Props> = ({
  Content,
  callback,
  caretPlacement = null,
  children,
  color = 'white',
  defaultVisible = false,
  delay = null,
  placement = 'bottom-center',
  position = null,
  trigger = 'click',
}) => {
  // ----- Setting Refs ----- //

  const [childrenRef, setChildrenRef] = React.useState<HTMLElement>(null);
  const popOverRef = React.useRef<HTMLDivElement>(null);
  const [extraRefs, setExtraRefs] = React.useState<ExtraRefs>([]); // *1

  // ----- Setting additional properties ----- //

  const [
    finalCaretPlacement,
    setFinalCaretPlacement,
  ] = React.useState<Props['caretPlacement']>(caretPlacement);
  const [popOverStyle, setPopOverStyle] = React.useState<PopOverStyle>(null);
  const [isVisible, setIsVisible] = React.useState<boolean>(defaultVisible);

  React.useEffect(() => {
    setFinalCaretPlacement(caretPlacement);
  }, [caretPlacement])

  // ----- Cloning Children and Content ----- //

  const FinalChildren = React.cloneElement(
    children,
    { ref: (node: HTMLElement) => setChildrenRef(node) },
  );
  const FinalContent = React.cloneElement(Content, { setExtraRefs });


  // ----- CALLBACK ----- //
  // attaches callback functionality

  React.useEffect(() => {
    if (callback) {
      callback({
        hidePopOver: () => () => setIsVisible(false),
        isVisible,
        showPopOver: () => () => setIsVisible(true),
      });
    }
  }, [callback, isVisible]);

  // ----- CLICK & HOVER EVENT LISTENERS ----- //
  // adds a click or hover event listener to conditionally display the popover

  React.useEffect(() => {
    const { handleClick, handleHover, handleMouseOut } = popOverMouseActions({
      childrenRef,
      delay,
      extraRefs,
      isVisible,
      popOverRef,
      setIsVisible,
      trigger,
    });


    if (childrenRef) {
      if (trigger === 'click') {
        document.addEventListener('mousedown', handleClick);
      }

      if (trigger === 'hover') {
        childrenRef.addEventListener('mouseover', handleHover);
        childrenRef.addEventListener('mouseout', handleMouseOut);
      }
    }

    return () => {
      if (childrenRef) {
        if (trigger === 'click') {
          document.removeEventListener('mousedown', handleClick);
        }

        if (trigger === 'hover') {
          childrenRef.removeEventListener('mouseover', handleHover);
          childrenRef.removeEventListener('mouseout', handleMouseOut);
        }
      }
    };
  }, [
    extraRefs,
    childrenRef,
    delay,
    popOverRef,
    isVisible,
    setIsVisible,
    trigger,
  ]);

  // ----- POPOVER STYLE  ----- //
  // sets the style and positioning of the popover, and updates said style and positioning if
  // the window gets resized.

  React.useEffect(() => {
    const getStyle = (): void => getPopOverStyle(
      finalCaretPlacement,
      childrenRef,
      placement,
      popOverRef,
      position,
      setFinalCaretPlacement,
      setPopOverStyle,
      window.innerHeight,
      window.innerWidth,
    );

    getStyle();

    window.addEventListener('resize', getStyle);

    return () => {
      window.removeEventListener('resize', getStyle);
    };
  }, [
    finalCaretPlacement,
    childrenRef,
    placement,
    popOverRef,
    position,
    isVisible,
  ]);

  // ----- RETURNS COMPONENT ----- //

  return (
    <>
      {FinalChildren}
      <Portal>
        <PopOverAnimation
          color={color}
          popOverStyle={popOverStyle}
          ref={popOverRef}
          isVisible={isVisible}
        >
          {
            finalCaretPlacement && (
              <PopOverCaret
                caretPlacement={finalCaretPlacement}
                childrenRef={childrenRef}
                color={color}
                popOverPlacement={placement}
                popOverRef={popOverRef}
              />
            )
          }
          {FinalContent}
        </PopOverAnimation>
      </Portal>
    </>
  );
};

export default PopOver;
