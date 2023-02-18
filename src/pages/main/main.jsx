import { useState } from 'react';
import { Buttons } from '../../components/buttons/buttons';
import { CardContainer } from '../../components/card-container/card-container';
import styles from './Main.module.scss';

export function Main() {
  const [isPanel, setIsPanel] = useState(true);

  return (
    <main className={styles.main}>
      <div className={styles.mainContainer}>
        <Buttons isPanel={isPanel} setIsPanel={setIsPanel} />
        <CardContainer isPanel={isPanel} />
      </div>
    </main>
  );
}
