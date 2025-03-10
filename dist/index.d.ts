import * as react_jsx_runtime from 'react/jsx-runtime';

declare global {
    interface Window {
        grecaptcha: any;
    }
}
interface ChatBoxProps {
    icon?: string;
    themeColor?: string;
    title?: string;
}
declare function ChatBoxPage({ options }: {
    options?: ChatBoxProps;
}): react_jsx_runtime.JSX.Element;

export { ChatBoxPage as default };
