import Header from 'components/common/header/header';
import styles from './app.module.scss'

const App = () => {



  return (
    <div className={styles.app}>
      <Header
        logOut={() => console.log('log out')}
        user='Dijon Dou'
      />
      <h1>Best IT Courses</h1>
    </div>
  )
}

export { App };
