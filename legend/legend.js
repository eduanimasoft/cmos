function hideShowLegend() {
    $(document).keydown(function(e) {
        if (e.keyCode == 27) {
            document.getElementById('legend-popup').classList.remove('active');
            return;
        }
    });
    document.getElementById("legend-placeholder").classList.toggle('active');
}