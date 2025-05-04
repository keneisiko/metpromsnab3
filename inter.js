document.addEventListener('DOMContentLoaded', function() {
    // Находим все миниатюры продуктов
    const thumbnails = document.querySelectorAll('.producticon');
    // Находим основной элемент с изображением
    const mainImage = document.querySelector('.productimg img');
    
    // Добавляем обработчик клика для каждой миниатюры
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            // Получаем путь к изображению из миниатюры
            const thumbnailImg = this.querySelector('img');
            const newSrc = thumbnailImg.getAttribute('src');
            
            // Обновляем основное изображение
            mainImage.setAttribute('src', newSrc);
            
            // Удаляем класс активности у всех миниатюр
            thumbnails.forEach(t => t.classList.remove('active'));
            
            // Добавляем класс активности текущей миниатюре
            this.classList.add('active');
        });
    });
    
    // Инициализация - делаем первую миниатюру активной
    if (thumbnails.length > 0) {
        thumbnails[0].classList.add('active');
    }
});




document.addEventListener('DOMContentLoaded', function() {
        const gridTable = document.querySelector('.js-highlight-grid');
        if (!gridTable) return;

        const tbody = gridTable.querySelector('tbody');
        const rows = 24;
        const cols = 20;
        const highlightClass = 'highlighted';
        const activeClass = 'active-cell';
        const headerClass = 'header-cell';
        let isTouchDevice = 'ontouchstart' in window;

        // Создаём таблицу
        for (let i = 0; i < rows; i++) {
            const tr = document.createElement('tr');
            for (let j = 0; j < cols; j++) {
                const td = document.createElement('td');
                td.dataset.row = i + 1;
                td.dataset.col = j + 1;

                // Заполняем ячейки
                if (i === 0 && j === 0) {
                    td.textContent = '';  // (1,1) — пустая
                } else if (i === 0 || j === 0) {
                    // Первая строка или первый столбец: 100, 150, 200...
                    const value = 100 + (Math.max(i, j) * 50);
                    td.textContent = value;
                    td.classList.add(headerClass);
                } else {
                    // Остальные ячейки: (строка + столбец) * 10
                    const value = (i + j) * 10;
                    td.textContent = value;
                }

                // Обработчики событий
                if (isTouchDevice) {
                    td.addEventListener('touchstart', handleTouch, { passive: true });
                } else {
                    td.addEventListener('mouseenter', highlightCells);
                    td.addEventListener('mouseleave', clearHighlight);
                }
                
                tr.appendChild(td);
            }
            tbody.appendChild(tr);
        }

        // --- Функции ---
        function highlightCells() {
            clearHighlight();
            const row = parseInt(this.dataset.row);
            const col = parseInt(this.dataset.col);
            this.classList.add(activeClass);
            
            // Подсвечиваем строку и столбец
            for (let c = 1; c < col; c++) {
                const cell = tbody.querySelector(`td[data-row="${row}"][data-col="${c}"]`);
                if (cell) cell.classList.add(highlightClass);
            }
            for (let r = 1; r < row; r++) {
                const cell = tbody.querySelector(`td[data-row="${r}"][data-col="${col}"]`);
                if (cell) cell.classList.add(highlightClass);
            }
        }

        function handleTouch(e) {
            e.preventDefault();
            const td = e.target.closest('td');
            if (!td) return;
            highlightCells.call(td);
        }

        function clearHighlight() {
            const highlighted = tbody.querySelectorAll(`.${highlightClass}, .${activeClass}`);
            highlighted.forEach(cell => {
                cell.classList.remove(highlightClass, activeClass);
            });
        }
    });







    document.addEventListener('DOMContentLoaded', function() {
        const carousel = document.querySelector('.boxcontainer');
        const prevBtn = document.querySelectorAll('.prev-btn');
        const nextBtn = document.querySelectorAll('.next-btn');
        const boxes = document.querySelectorAll('.box');
        const boxWidth = boxes[0].offsetWidth + 25; // width + gap
        
        let currentPosition = 0;
        const visibleItems = () => window.innerWidth < 769 ? 1 : 4;
        const maxPosition = -((boxes.length - visibleItems()) * boxWidth);
        
        function updateCarousel() {
            carousel.style.transform = `translateX(${currentPosition}px)`;
            
            // Disable/enable buttons based on position
            prevBtn.forEach(btn => btn.disabled = currentPosition >= 0);
            nextBtn.forEach(btn => btn.disabled = currentPosition <= maxPosition);
        }
        
        prevBtn.forEach(btn => {
            btn.addEventListener('click', () => {
                currentPosition = Math.min(currentPosition + boxWidth * visibleItems(), 0);
                updateCarousel();
            });
        });
        
        nextBtn.forEach(btn => {
            btn.addEventListener('click', () => {
                currentPosition = Math.max(currentPosition - boxWidth * visibleItems(), maxPosition);
                updateCarousel();
            });
        });
        
        window.addEventListener('resize', () => {
            const newVisibleItems = visibleItems();
            maxPosition = -((boxes.length - newVisibleItems) * boxWidth);
            currentPosition = Math.max(currentPosition, maxPosition);
            currentPosition = Math.min(currentPosition, 0);
            updateCarousel();
        });
        
        // Initialize
        updateCarousel();
    });


    document.addEventListener('DOMContentLoaded', function() {
  // Находим элементы
  const catalogBtn = document.querySelector('.catalog');
  const modal = document.getElementById('catalogModal');
  const closeBtn = document.querySelector('.close');

  // Открытие модального окна при клике на кнопку
  catalogBtn.addEventListener('click', function() {
    modal.style.display = 'flex'; // Показываем окно
  });

  // Закрытие при клике на крестик
  closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
  });

  // Закрытие при клике вне окна
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});



document.addEventListener('DOMContentLoaded', function() {
  const burger = document.querySelector('.burger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const closeMenu = document.querySelector('.close');

  // Открытие меню по клику на бургер
  burger.addEventListener('click', function() {
    mobileMenu.classList.add('active');
    burger.classList.add('active');
    document.body.style.overflow = 'hidden'; // Блокируем скролл страницы
  });

  // Закрытие меню по клику на крестик
  closeMenu.addEventListener('click', function() {
    mobileMenu.classList.remove('active');
    burger.classList.remove('active');
    document.body.style.overflow = ''; // Возвращаем скролл
  });

  // Закрытие меню по клику вне его области
  mobileMenu.addEventListener('click', function(e) {
    if (e.target === mobileMenu) {
      mobileMenu.classList.remove('active');
      burger.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
    const titles = document.querySelectorAll('.productdopdiscriptiontitle');
    const infoBlock = document.querySelector('.productdopdiscriptioninfo');
    
    // Обработчик клика для всех заголовков
    titles.forEach(title => {
        title.addEventListener('click', function() {
            // Удаляем активный класс со всех заголовков
            titles.forEach(t => {
                t.style.color = '#9f9f9f';
                t.classList.remove('active');
                t.style.borderBottom = 'none';
            });
            
            // Добавляем активный класс к текущему заголовку
            this.style.color = '#343434';
            this.style.borderBottom = '4px solid #9c2426';
            this.classList.add('active');
            
            // Вставляем HTML-содержимое в информационный блок
            infoBlock.innerHTML = this.getAttribute('data-info');
        });
    });
    
    // Автоматически активируем первый элемент
    if (titles.length > 0) {
        titles[0].click();
    }
});

(function() {
    'use strict';
    
    class HorizontalScroll {
        constructor(container) {
            this.container = container;
            this.isDragging = false;
            this.startX = 0;
            this.scrollLeft = 0;
            
            this.init();
        }
        
        init() {
            this.addEventListeners();
        }
        
        addEventListeners() {
            // Мышь
            this.container.addEventListener('mousedown', this.handleMouseDown.bind(this));
            this.container.addEventListener('mouseleave', this.handleMouseUp.bind(this));
            this.container.addEventListener('mouseup', this.handleMouseUp.bind(this));
            this.container.addEventListener('mousemove', this.handleMouseMove.bind(this));
            
            // Тач-устройства
            this.container.addEventListener('touchstart', this.handleTouchStart.bind(this), { passive: false });
            this.container.addEventListener('touchend', this.handleTouchEnd.bind(this));
            this.container.addEventListener('touchmove', this.handleTouchMove.bind(this), { passive: false });
        }
        
        // Обработчики мыши
        handleMouseDown(e) {
            this.isDragging = true;
            this.startX = e.pageX - this.container.offsetLeft;
            this.scrollLeft = this.container.scrollLeft;
            this.container.style.cursor = 'grabbing';
        }
        
        handleMouseUp() {
            this.isDragging = false;
            this.container.style.cursor = 'grab';
        }
        
        handleMouseMove(e) {
            if (!this.isDragging) return;
            e.preventDefault();
            this.scrollContainer(e.pageX);
        }
        
        // Обработчики тач-событий
        handleTouchStart(e) {
            this.isDragging = true;
            this.startX = e.touches[0].pageX - this.container.offsetLeft;
            this.scrollLeft = this.container.scrollLeft;
        }
        
        handleTouchEnd() {
            this.isDragging = false;
        }
        
        handleTouchMove(e) {
            if (!this.isDragging) return;
            e.preventDefault();
            this.scrollContainer(e.touches[0].pageX);
        }
        
        // Общая логика скролла
        scrollContainer(pageX) {
            const x = pageX - this.container.offsetLeft;
            const walk = (x - this.startX) * 2;
            this.container.scrollLeft = this.scrollLeft - walk;
        }
    }
    
    // Инициализация всех контейнеров на странице
    document.addEventListener('DOMContentLoaded', function() {
        const containers = document.querySelectorAll('.horizontal-scroll');
        containers.forEach(container => {
            new HorizontalScroll(container);
        });
    });
    
})();




document.addEventListener('DOMContentLoaded', function() {
    const partnersSlider = new Swiper('.partners-slider', {
        slidesPerView: 'auto',
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: '.next-btn',
            prevEl: '.prev-btn',
        },
        breakpoints: {
            320: {
                slidesPerView: 2,
                spaceBetween: 15
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 20
            },
            1024: {
                slidesPerView: 6,
                spaceBetween: 30
            }
        }
    });
});