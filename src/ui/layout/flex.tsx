const FlexLayout: React.FC<React.PropsWithChildren<React.CSSProperties>> = ({
  children,
  ...style
}) => {
  return <div style={{ display: "flex", ...style }}>{children}</div>;
};

export default FlexLayout;
