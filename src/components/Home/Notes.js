import React from 'react';
import styles from "./Notes.module.css";

const NotesComponent = () => {
  return (
    <div className={styles.card}>
      <h3>All notes</h3>
      <p>
        Spring Boot is an open-source Java-based framework used to create stand-alone, production-grade Spring-based applications. It simplifies the setup and development of new Spring applications by providing a set of preconfigured settings and conventions. Spring Boot reduces the need for a lot of manual configurations, making it easy to create robust and production-ready applications quickly.
      </p>
    </div>
  );
};

export default NotesComponent;
