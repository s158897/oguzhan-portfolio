interface ArrowProps {
    diagonal?: boolean;
}

const Arrow = ({ diagonal = false }: ArrowProps) => {
    return (
        <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>
    );
};

export default Arrow;
