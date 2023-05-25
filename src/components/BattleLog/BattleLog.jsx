import React, { useRef, useEffect } from "react"
import styles from './BattleLog.module.css'

function BatteLog(props){

   const [logs, setLogs] = React.useState([
      {
         bots: ['Bot1', 'Bot2'],
         result: 'Computations'
      },
      {
         bots: ['Bot3', 'Bot2'],
         result: 'blug blugb robots, bluh bluh won and won and won and won'
      },
      {
         bots: ['Bot1', 'Bot2'],
         result: 'Computations'
      },
      {
         bots: ['Bot1', 'Bot2'],
         result: 'Computations'
      },
      {
         bots: ['Bot1', 'Bot2'],
         result: 'Computations'
      },
      {
         bots: ['Bot1', 'Bot2'],
         result: 'Computations'
      },
      {
         bots: ['Bot1', 'Bot2'],
         result: 'Computations'
      },
      {
         bots: ['Bot1', 'Bot2'],
         result: 'Computations'
      }
   ])

   // creating reference for wrapper to adjust scroll
   const scrollableElement = useRef(null);

   // makes the scroll bar head to bottom on first render and with every new log in array so user doesn't have to scroll down for new result
   useEffect(() => {
      if (scrollableElement.current) {
         scrollableElement.current.scrollTop = scrollableElement.current.scrollHeight - scrollableElement.current.clientHeight;
      }
   }, [logs]);

          // maps logs to wrapper
          const renderLogs = () => {
            return logs.map((log, index) => (
               <div key= {index} className={styles.container}>
                  <p className={styles.bots_txt}>{log.bots[0]} vs {log.bots[1]}</p>
                  <p className={styles.results_txt}>{log.result}</p>
               </div>
            ))
         }
         
   return window.matchMedia('(max-width: 768px)').matches ? null : ( 
    <div className={styles.wrapper} ref={scrollableElement}>
      <p>Battle Log</p>
         {renderLogs()}
    </div>
   )
}
export default BatteLog