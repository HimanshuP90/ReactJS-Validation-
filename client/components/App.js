import React from 'react';
import NavigationBar from  './NavigationBar';
import styles from './main.css';

class App extends React.Component{
	render() {
		return(
		<div className={styles.main}>
			<NavigationBar />
			{this.props.children}
		</div>
	);
	}
}

export default App;