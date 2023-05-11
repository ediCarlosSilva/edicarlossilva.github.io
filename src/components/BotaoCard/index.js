import styles from './BotaoCard.module.css';

export default function BotaoCard({ children, tamanho, deploy }) {
    return (
        <a href={deploy} target="_blank" rel="noreferrer" className={`
            ${styles.botaoCard}
            ${styles[tamanho]}
            `}>
            {children}
        </a>
    )
}