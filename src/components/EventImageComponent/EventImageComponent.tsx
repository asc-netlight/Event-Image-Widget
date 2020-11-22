import { useConfig } from "hooks/useConfig";
import { FunctionComponent } from "react";
import styles from "./styles.module.css";


const EventImage: FunctionComponent = () => {
  const { config } = useConfig();

  return config.conf ? <img className={styles.post} src={config.conf.imageUrl} alt="" /> : <div>Loading..</div>
  
};

export default EventImage
