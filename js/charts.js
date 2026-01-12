const initCharts = () => {
    const skillsCanvas = document.getElementById('skills-chart');
    if (!skillsCanvas || typeof Chart === 'undefined') {
        return;
    }

    const accentColor = getComputedStyle(document.documentElement).getPropertyValue('--color-accent').trim();
    const textColor = getComputedStyle(document.documentElement).getPropertyValue('--color-text').trim();

    const skillsData = {
        labels: [
            'Web Pentesting', 'Mobile Pentesting', 'Network Security',
            'Scripting (Bash/Python)', 'Reverse Engineering', 'Active Directory'
        ],
        datasets: [{
            label: 'Proficiency',
            data: [90, 80, 75, 95, 65, 85],
            backgroundColor: 'rgba(0, 255, 65, 0.2)',
            borderColor: accentColor,
            pointBackgroundColor: accentColor,
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: accentColor
        }]
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            r: {
                angleLines: {
                    color: 'rgba(255, 255, 255, 0.1)'
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)'
                },
                pointLabels: {
                    color: textColor,
                    font: {
                        family: "'Fira Code', monospace",
                        size: 12
                    }
                },
                ticks: {
                    color: textColor,
                    backdropColor: 'transparent',
                    stepSize: 20
                }
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    };
    
    // Check for light theme
    if (document.body.classList.contains('light-theme')) {
        chartOptions.scales.r.angleLines.color = 'rgba(0, 0, 0, 0.1)';
        chartOptions.scales.r.grid.color = 'rgba(0, 0, 0, 0.1)';
        chartOptions.scales.r.pointLabels.color = textColor;
        chartOptions.scales.r.ticks.color = textColor;
        skillsData.datasets[0].backgroundColor = 'rgba(0, 82, 204, 0.2)';
    }

    const skillsChart = new Chart(skillsCanvas, {
        type: 'radar',
        data: skillsData,
        options: chartOptions
    });

    // Update chart colors on theme change
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const isLight = document.body.classList.contains('light-theme');
            const newAccentColor = getComputedStyle(document.documentElement).getPropertyValue('--color-accent').trim();
            const newTextColor = getComputedStyle(document.documentElement).getPropertyValue('--color-text').trim();

            skillsChart.data.datasets[0].borderColor = newAccentColor;
            skillsChart.data.datasets[0].pointBackgroundColor = newAccentColor;
            skillsChart.data.datasets[0].backgroundColor = isLight ? 'rgba(0, 82, 204, 0.2)' : 'rgba(0, 255, 65, 0.2)';
            
            skillsChart.options.scales.r.angleLines.color = isLight ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.1)';
            skillsChart.options.scales.r.grid.color = isLight ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.1)';
            skillsChart.options.scales.r.pointLabels.color = newTextColor;
            skillsChart.options.scales.r.ticks.color = newTextColor;
            
            skillsChart.update();
        });
    }
};
