import { useState, useMemo } from 'react';

export function useSortableData(items, customOrders = {}) {
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

    const sortedItems = useMemo(() => {
        const sortableItems = [...items];
        if (sortConfig.key) {
            sortableItems.sort((a, b) => {
                if (customOrders[sortConfig.key]) {
                    // Tri selon l’ordre personnalisé
                    const order = customOrders[sortConfig.key];
                    const aOrder = order[a[sortConfig.key]];
                    const bOrder = order[b[sortConfig.key]];
                    if (aOrder < bOrder) return sortConfig.direction === 'asc' ? -1 : 1;
                    if (aOrder > bOrder) return sortConfig.direction === 'asc' ? 1 : -1;
                    return 0;
                }

                let aValue = a[sortConfig.key]?.toLowerCase?.() || a[sortConfig.key];
                let bValue = b[sortConfig.key]?.toLowerCase?.() || b[sortConfig.key];

                if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
                if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
                return 0;
            });
        }
        return sortableItems;
    }, [items, sortConfig, customOrders]);

    const requestSort = (key) => {
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };

    return { items: sortedItems, requestSort, sortConfig };
}
