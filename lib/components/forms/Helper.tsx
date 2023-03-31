import { NullstackClientContext, NullstackFunctionalComponent, NullstackNode } from "nullstack";

import type { ComponentProps } from "../../types";

interface HelperProps extends ComponentProps {
  children?: NullstackNode;
}

function Helper(props: NullstackClientContext<HelperProps>) {
  const { children, class: klass, theme, useTheme } = props;
  const classes = useTheme(theme).helper;
  return <p class={[classes, klass]}>{children}</p>;
}

export default Helper as NullstackFunctionalComponent<HelperProps>;