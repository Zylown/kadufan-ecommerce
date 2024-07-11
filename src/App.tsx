import { Button } from "antd";

function App() {
  return (
    <>
      <div className="text-center">
        <p className="text-3xl">Hola</p>
        <Button
          type="primary"
          size="large"
          className="mt-4 text-2xl"
          href="https://google.com"
          target="_blank"
          rel="noreferrer"
        >
          Vamos!
        </Button>
        {/* si es compatible
        con talwindcss
        */}
      </div>
    </>
  );
}

export default App;
