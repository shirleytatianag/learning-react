//Esto es un componente que podemoso reutilizar
// eslint-disable-next-line react/prop-types
export const Square = ({children, updateBoard, index, isSelected}) => {
    const className = `square ${isSelected ? 'is-selected' : ''}`;

    const handleClick = () => {
        updateBoard(index);
    }
    return (
        <div className={className} onClick={handleClick}>
            {children}
        </div>
    )
}