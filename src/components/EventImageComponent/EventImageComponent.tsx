import { useConfig } from "hooks/useConfig";
import { FunctionComponent } from "react";

import styles from "./styles.module.css";

const EventImage: FunctionComponent = () => {
  const { hasLoadedConfig, config, id } = useConfig();

  return hasLoadedConfig ? (
    <img className={styles.post} src={config.conf.imageUrl} alt="" />
  ) : (
    <div>
      ...loading:
      <p>config: {JSON.stringify(config ?? {}, null, 2)}</p>
      <p>id: {id}</p>
    </div>
  );
};

export default EventImage;
