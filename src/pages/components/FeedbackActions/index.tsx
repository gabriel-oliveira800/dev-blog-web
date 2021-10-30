import {
  positions,
  Provider,
  transitions,
  AlertProviderProps,
  AlertComponentProps,
} from "react-alert";

const defaultOptions = {
  timeout: 3000,
  offset: "30px",
  transition: transitions.SCALE,
  position: positions.TOP_RIGHT,
} as AlertProviderProps;

export interface FeedbackActionsProviderProps {
  children: React.ReactNode;
  options?: AlertProviderProps;
}

interface FeedbackActionComponentProps {
  type: string;
  message: string;
}

const FeedbackActionComponent = (props: AlertComponentProps) => {
  const { message, type } = props.message as FeedbackActionComponentProps;

  const backgroundColors = {
    info: "#ff008e",
    error: "#f44336",
    success: "#1b873f",
  };

  const style: React.CSSProperties = {
    width: "340px",
    height: "80px",
    padding: "10px",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    fontSize: "16px",
    fontWeight: 400,
    borderRadius: "6px",
    backgroundColor: backgroundColors[type as keyof typeof backgroundColors],
  };

  return <div style={style}>{message}</div>;
};

function FeedbackActionsProvider({
  children,
  options,
}: FeedbackActionsProviderProps) {
  const feedbackOptions = options !== undefined ? options : defaultOptions;
  return (
    <Provider {...feedbackOptions} template={FeedbackActionComponent}>
      {children}
    </Provider>
  );
}

export { FeedbackActionsProvider, defaultOptions, FeedbackActionComponent };
