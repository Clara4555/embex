const tabs = document.querySelectorAll('.about-tab');
    const tabContents = document.querySelectorAll('.about-tab-content');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(btn => btn.classList.remove('active'));
        tab.classList.add('active');

        const target = tab.dataset.tab;

        tabContents.forEach(content => {
          content.classList.remove('active');
          if (content.id === target) {
            content.classList.add('active');
          }
        });
      });
    });


    
  const counters = document.querySelectorAll('.stat-number');

  const animateCounters = () => {
    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        let current = +counter.innerText.replace('%', '');

        const increment = Math.ceil(target / 100);

        if (current < target) {
          counter.innerText = current + increment + (counter.innerText.includes('%') ? '%' : '');
          setTimeout(updateCount, 20);
        } else {
          counter.innerText = target + (counter.innerText.includes('%') ? '%' : '');
        }
      };
      updateCount();
    });
  };

  let triggered = false;
  window.addEventListener('scroll', () => {
    const statsSection = document.querySelector('.stats-section');
    const sectionTop = statsSection.offsetTop;
    const scrollTop = window.scrollY + window.innerHeight;

    if (!triggered && scrollTop > sectionTop) {
      animateCounters();
      triggered = true;
    }
  });

