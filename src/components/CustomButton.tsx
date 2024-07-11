import { Button } from "antd";

interface CustomButtonProps {
  children: React.ReactNode;
}

export default function CustomButton({ children }: CustomButtonProps) {
  return (
    <Button
      size="large"
      className="text-2xl"
      href="https://google.com"
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </Button>
  );
}
