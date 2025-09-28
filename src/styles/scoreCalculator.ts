const getMetacriticColor = (score: number): string => {
    if (score > 75) return 'bg-green-600';
    if (score > 50) return 'bg-yellow-600';
    if (score > 25) return 'bg-orange-600';
    return 'bg-red-600';
}

export { getMetacriticColor };