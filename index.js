function catMouse(map, maxDistance) {
    const rows = map.split('\n');
    let catIndex, mouseIndex;

    // Находим позиции кота и мыши
    for (let i = 0; i < rows.length; i++) {
        if (rows[i].includes('C')) {
            catIndex = { row: i, col: rows[i].indexOf('C') };
        }
        if (rows[i].includes('m')) {
            mouseIndex = { row: i, col: rows[i].indexOf('m') };
        }
    }

    // Если не нашли кота или мышь
    if (!catIndex || !mouseIndex) {
        return 'boring without two animals';
    }

    // Рассчитываем расстояние между котом и мышью
    const distance = Math.abs(catIndex.row - mouseIndex.row) + Math.abs(catIndex.col - mouseIndex.col);

    // Проверяем расстояние
    if (distance <= maxDistance) {
        return 'Caught!';
    } else {
        return 'Escaped!';
    }
}
