function SmoothScroll() {


    var $links;

    /**
     * init - Initialize
     *
     * @return {type}  description
     */
    function init() {
        $links = $('.smooth-scroll');

        bind();
    }


    /**
     * bind - Bind all events
     */
    function bind() {
        $links
            .off('click')
            .on('click', scrollToLink)
    }


    /**
     * Add smooth scrolling to all links
     */
    function scrollToLink(event) {
        var that = this;

        if (!that.hash) {
            that = $(this).find('a')[0];
        }
        // Make sure this.hash has a value before overriding default behavior
        if (that.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = that.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 150
            }, 400, function(){
                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });

        } // End if
        else {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: 0
            }, 400, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = "";
            });
        }
    }


    init();
}
