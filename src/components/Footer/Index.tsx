import styles from './Footer.module.scss';
import  Logo from 'assets/logo.png';

export default function Footer() {
  return (
    <footer className={styles.footer}>
		<div className={styles.footer__alunos}>
			Alunos: Anderson Donizete da Guia | Ana Flávia de O Rodrigues | 
      Gabrielle Godinho Del Rio | Ana Priscilla de Proença Oliveira |
      Ariel Ribeiro Sobral |  José Ricardo Galvão | Leandro Soares de Oliveira 
        	<img src={Logo} height='40px' width='40px'/>      
		</div>
    </footer>
  );
}