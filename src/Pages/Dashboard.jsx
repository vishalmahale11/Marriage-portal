import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import TableCompo from "../Components/Table";
import styles from "./Styles/dashboard.module.css";

const Dashboard = () => {
  let loginData = JSON.parse(localStorage.getItem("loginData")) || [];
  let applicationData = JSON.parse(localStorage.getItem("data")) || [];

  const [i, setI] = useState(0);

  const handleClick = () => {
    setI(i + 1);
  };

  return (
    <>
      <Box className={styles.user}>
        <Heading onClick={handleClick}>{loginData[i].role}</Heading>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH4AAAB+CAMAAADV/VW6AAAAY1BMVEX///8AAADFxcX8/Pzz8/MsLCz29vaZmZnl5eV3d3fq6uqUlJTCwsLc3NyRkZGpqamwsLBubm5paWlISEi2trbR0dEMDAw4ODhYWFgiIiKDg4NSUlIYGBhBQUGgoKATExNgYGCnaOqcAAADy0lEQVRoge1a24KiMAwVuVpBUbmIjjP8/1fuuJK0oNK0De4+9DxqzWmTNLe6Wnl4eHh4eHh4ePyXiIp6va4L8XnmpCjPbdwEv2ji9rwvog+SZ7tTMMFtV3yIvDhOuR84fmID4vCa/O8GsqXZv9+T35EuSh7NHH1QwII+KG469iBoFzNA1k2oTofL5XCdfPizkAdmI5ZNhWqOqs3oq0X4ky9JEG8nJo7SWH7bLGH/Xsq/vIiz4iK/P4fs7MqNy1+vWMsV7PevkIp/m2JEi4tqZnr079uMYRNMBSde9kp/9jvk+StW+paoVbRRzMmOXrXTrdxq/NMKR/qZ4P73fOyJgUXRS/hiTzlIbBP92hDS0p6NHkK61vJ3pMPiDRd7Agci5ZLMQFUkCIglJHMmEKG4CvB6kHegLQdTcQVecGaS6aXxSyZ6SHZEX4bdcqU9OA4xkEGI3DLRQyBd05bXzPRwemIWy5np94O870WWawHGvNCW78yUpQUk8Z62HNIjV70dDfI6UhwTkHK5Ul4INTbJ9cHxr2zVNpTwR8pi6EKJnkIAHOiL0D6KzkRVNAwSKTkcmx0+drxLem/GUpeYn0jA5lbbPlzJGzUBTpM0kRTic9Bzsist3mwWxzKXu8fH9mEu65e4iNPydyRyrPO2jEDNBy37gKFG2cHxZfBVB37c/fVK5tFfNC8MsP+R33Ol2hFG86N0FADFaNpIrIid+IPbLq8zIbI6347HfQuxKwEV0MXxdNbH11w9Yzvlegb3lRuhbubJmwV8XqU/z9OflqRfPz1iPOPGOVVR8e4VY4p+kZnuXk8M4A87Yjo3fyCOX358Yx7q5xOPb/o0R4osT4/TG8E6VkxHortNHU2r6KjejBXBeP9H0aYt33QbomxH/Fx1vhpru2pGalipGmCKvmqm0ao05eZXzn6ltBlKXGRodEpFGmlSF+7kL5wnm4WFLGXHjikglM5sMCfL8Uex22hTup1RJpGvSqSmWC/GcEZY2W17DKl64ykV1p4O6kcZV/Pf4quj/XATNWjRtOALSGAbfDGCWaUvdH/L5BNCDW2h+jtA/V921kfvtYwdGLHsJuuw+96OXc4krB60C8fDKxJsas/UZe8PgP5snA9qS4esBbnH4j0b/yfiMKiAu9+ZF75r+51LQOlhHvjB9E4PQhC1zY0PG3cqGGprFcKoxmlGlQzdR2P8Q4iYLuyrla3/whTXMt4DwISmgQcc33FOBMWa6XAf0qVjqQ5NgunNM3w2fgfDF0iEyNd35I6TimwQ8w/+TOvh4eHh4eHh4fEH6kQhjFwSwSgAAAAASUVORK5CYII="
          alt="img"
        />
      </Box>
      <Box className={styles.mainDiv}>
        {applicationData.map((item) => (
          <TableCompo
            key={Date.now()}
            name={item.name}
            gender={item.gender}
            loginData={loginData[i]}
          />
        ))}
      </Box>
    </>
  );
};

export default Dashboard;
