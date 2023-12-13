function DataFilterComponent() {
    const dropdownItems = [
        { id: 1, label: 'Mobile' },
        { id: 2, label: 'Cars' },
        { id: 3, label: 'Bikes' },
        { id: 4, label: 'Property' },
    ];
    const searchInput = ""
    const handleSearchInputChange = (e) => {
        searchInput(e.target.value);
    };
    const filteredItems = dropdownItems.filter(item =>
        item.label.toLowerCase().includes(searchInput.toLowerCase())
    );
}

export default DataFilterComponent;
