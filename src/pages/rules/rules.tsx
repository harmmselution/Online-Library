import styles from './rules.module.scss';
import { IRules } from '../../interfaces/interfaces';

export const Rules: React.FC<IRules> = ({ contentView }) => {
  return (
    <div className={styles.rulesContainer}>
      <div className={styles.textContainer}>
        <h1 className={styles.textHeader}>{contentView}</h1>
        <div className={styles.allRules}>
          <h3 className={styles.first}>
            1. Идейные соображения высшего порядка,а также высокое качество позиционных исследований представляет собой
            интересный эксперимент проверки экспериментов, поражающих по своей масштабности и грандиозности.
          </h3>
          <div className={styles.firstRules}>
            <div className={styles.subFirst}>
              1.1. Задача организации, в особенности же социально-экономическое развитие однозначно определяет каждого
              участника как способного принимать собственные решения касаемо инновационных методов управления
              процессами.
            </div>
            <div className={styles.subFirst}>
              1.2. Не следует, однако, забывать, что разбавленное изрядной долей эмпатии, рациональное мышление играет
              важную роль в формировании приоритизации разума над эмоциями. Но некоторые особенности внутренней политики
              лишь добавляют фракционных разногласий и преданы социально-демократической анафеме.
            </div>
            <div className={styles.subFirst}>
              1.3. Приятно, граждане, наблюдать, как элементы политического процесса, превозмогая сложившуюся непростую
              экономическую ситуацию, объявлены нарушающими общечеловеческие нормы этики и морали.
            </div>
            <div className={styles.subFirst}>
              1.4. Но независимые государства, которые представляют собой яркий пример континентально-европейского типа
              политической культуры, будут объединены в целые кластеры себе подобных.
            </div>
          </div>
        </div>
        <div className={styles.allRules}>
          <h3 className={styles.first}>
            2. С учётом сложившейся международной обстановки, консультация с широким активом предоставляет широкие
            возможности для приоритизации разума над эмоциями.
          </h3>
          <div className={styles.firstRules}>
            <div className={styles.subFirst}>
              2.1. Задача организации, в особенности же социально-экономическое развитие однозначно определяет каждого
              участника как способного принимать собственные решения касаемо инновационных методов управления
              процессами.
            </div>
            <div className={styles.subContainer}>
              <div className={styles.subFirst}>
                2.1.1. Не следует, однако, забывать, что разбавленное изрядной долей эмпатии, рациональное мышление
                играет важную роль в формировании приоритизации разума над эмоциями. Но некоторые особенности внутренней
                политики лишь добавляют фракционных разногласий и преданы социально-демократической анафеме.
              </div>
              <div className={styles.subFirst}>
                2.1.2. Приятно, граждане, наблюдать, как элементы политического процесса, превозмогая сложившуюся
                непростую экономическую ситуацию, объявлены нарушающими общечеловеческие нормы этики и морали.
              </div>
            </div>
            <div className={styles.subFirst}>
              2.2. Но независимые государства, которые представляют собой яркий пример континентально-европейского типа
              политической культуры, будут объединены в целые кластеры себе подобных.
            </div>
          </div>
        </div>
        <div className={styles.allRules}>
          <h3 className={styles.first}>
            3. Принимая во внимание показатели успешности, укрепление и развитие внутренней структуры требует от нас
            анализа приоритизации разума над эмоциями.
          </h3>
          <div className={styles.firstRules}>
            <div className={styles.subFirst}>
              3.1. Задача организации, в особенности же социально-экономическое развитие однозначно определяет каждого
              участника как способного принимать собственные решения касаемо инновационных методов управления
              процессами.
            </div>
            <div className={styles.subContainer}>
              <div className={styles.subFirst}>
                3.1.1. Не следует, однако, забывать, что разбавленное изрядной долей эмпатии, рациональное мышление
                играет важную роль в формировании приоритизации разума над эмоциями. Но некоторые особенности внутренней
                политики лишь добавляют фракционных разногласий и преданы социально-демократической анафеме.
              </div>
              <div className={styles.subFirst}>
                3.1.2. Приятно, граждане, наблюдать, как элементы политического процесса, превозмогая сложившуюся
                непростую экономическую ситуацию, объявлены нарушающими общечеловеческие нормы этики и морали.
              </div>
            </div>
            <div className={styles.subFirst}>
              3.2. Но независимые государства, которые представляют собой яркий пример континентально-европейского типа
              политической культуры, будут объединены в целые кластеры себе подобных.
            </div>
            <div className={styles.subFirst}>
              3.3. Не следует, однако, забывать, что экономическая повестка сегодняшнего дня требует анализа анализа
              существующих паттернов поведения.
            </div>
            <div className={styles.subContainer}>
              <div className={styles.subFirst}>
                3.3.1. А ещё представители современных социальных резервов набирают популярность среди определенных
                слоев населения, а значит, должны быть функционально разнесены на независимые элементы.
              </div>
              <div className={styles.subSubFirst}>
                <div className={styles.subFirst}>
                  3.3.1.1. Стремящиеся вытеснить традиционное производство, нанотехнологии могут быть объявлены
                  нарушающими общечеловеческие нормы этики и морали.
                </div>
                <div className={styles.subFirst}>
                  3.3.1.2. Прежде всего, разбавленное изрядной долей эмпатии, рациональное мышление однозначно фиксирует
                  необходимость новых предложений. Являясь всего лишь частью общей картины, независимые государства
                  представлены в исключительно положительном свете.
                </div>
              </div>
            </div>

            <div className={styles.subFirst}>
              3.4. Повседневная практика показывает, что убеждённость некоторых оппонентов требует от нас анализа
              распределения внутренних резервов и ресурсов.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
