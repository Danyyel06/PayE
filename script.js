$(document).ready(function() {
    // Initialize DataTables once and get the API instance
    var table = $('#example').DataTable({
        scrollX: true,
        lengthChange: true,
        searching: true, // Enable the built-in search
        ordering: false,
        columnDefs: [
            { width: '1px', targets: 0 },
            { width: '200px', targets: 1 },
            { width: '50px', targets: 2 },
            { width: '150px', targets: 3 },
            { width: '200px', targets: 4 },
            { width: '8px', targets: 5 },
            { width: '200px', targets: 6 },
            { width: '200px', targets: 7 },
            { width: '200px', targets: 8 },
            { width: '200px', targets: 9 },
            { width: '200px', targets: 10 },
            { width: '200px', targets: 11 },
            { width: '200px', targets: 12 },
            { width: '200px', targets: 13 },
            { width: '200px', targets: 14 },
            { width: '200px', targets: 15 },
            { width: '200px', targets: 16 },
            { width: '200px', targets: 17 },
            { width: '200px', targets: 18 },
            { width: '200px', targets: 19 },
            { width: '220px', targets: 20 },
            { width: '200px', targets: 21 },
            { width: '200px', targets: 22 },
            { width: '200px', targets: 23 }
        ],
        lengthMenu: [ [20, 25, 30, -1], [20, 25, 30, 'All'] ] 
        
    });

    // Custom search integration
    const customSearchInput = document.getElementById('customSearch');
    if (customSearchInput) {
        customSearchInput.addEventListener('input', function () {
            table.search(this.value).draw();
        });
    } else {
        console.error("Custom search input element with ID 'customSearch' not found!");
    }

    // "Go to Page" functionality (without a button)
    const goToPageInput = document.getElementById('goToPage');

    if (goToPageInput) {
        goToPageInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                var pageNumber = parseInt(goToPageInput.value);
                if (!isNaN(pageNumber) && pageNumber > 0 && pageNumber <= table.page.info().pages) {
                    table.page(pageNumber - 1).draw('page');
                } else {
                    alert('Invalid page number.');
                    goToPageInput.value = ''; // Clear the invalid input
                }
            }
        });
    } else {
        console.error("'goToPage' input element not found!");
    }

    // Filter header toggle functionality
    const filterHeaders = document.querySelectorAll('.filter-header');
    const showFiltersButton = document.getElementById('showFiltersButton');
    const filtersContainer = document.getElementById('filtersContainer');

    filterHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const filterGroup = this.parentNode;
            filterGroup.classList.toggle('open');
            // const arrow = this.querySelector('.arrow');
            // arrow.textContent = filterGroup.classList.contains('open') ? '&#9660;' : '&#9658;';
        });
    });

    showFiltersButton.addEventListener('click', function() {
        filtersContainer.classList.toggle('hidden');
    });

    // Datepicker initialization
    const getDatePickerTitle = elem => {
        const label = elem.nextElementSibling;
        let titleText = '';
        if (label && label.tagName === 'LABEL') {
            titleText = label.textContent;
        } else {
            titleText = elem.getAttribute('aria-label') || '';
        }
        return titleText;
    }

    const elems = document.querySelectorAll('.datepicker_input');
    for (const elem of elems) {
        const datepicker = new Datepicker(elem, {
            'format': 'dd/mm/yyyy', // UK format
            title: getDatePickerTitle(elem)
        });
    }
});