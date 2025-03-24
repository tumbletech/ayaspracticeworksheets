document.addEventListener('DOMContentLoaded', function() {
    const missionBtn = document.getElementById('missionBtn');
    const subMissionContainer = document.getElementById('subMissionContainer');
    const mainButtons = document.querySelectorAll('.mission-button');

    // Toggle sub-mission buttons when clicking 'Our Mission' button
    missionBtn.addEventListener('click', function() {
        if (subMissionContainer.style.display === 'block') {
            subMissionContainer.style.display = 'none';
        } else {
            subMissionContainer.style.display = 'block';
        }
    });

    // Hide sub-mission buttons when any other main button is clicked
    mainButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (button !== missionBtn) {
                subMissionContainer.style.display = 'none';
            }
        });
    });

    // Handle modal close to remove the greyed-out backdrop issue
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.addEventListener('hidden.bs.modal', function () {
            const backdrop = document.querySelector('.modal-backdrop');
            if (backdrop) {
                backdrop.remove();
            }
        });
    });
});
