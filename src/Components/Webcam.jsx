import { Button } from "@chakra-ui/react";
import Webcam from "react-webcam";

const WebcamCapture = () => (
  <Webcam audio={false} height={300} screenshotFormat="image/jpeg" width={380}>
    {({ getScreenshot }) => (
      <Button
        onClick={() => {
          const imageSrc = getScreenshot();
          console.log(imageSrc);
        }}
      >
        Capture photo
      </Button>
    )}
  </Webcam>
);

export default WebcamCapture;
