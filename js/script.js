//Functie om te checken welk element in de viewport van de gebruiker is.
    $.fn.isInViewport = function () {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();

        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();

        return elementBottom > viewportTop && elementTop < viewportBottom;
    };
    

    

    



    

// 

     $(window).on('resize scroll', function () {
        $(".playlists").each(function (index, element) {
            
            
            var playlistsTotal = $(".playlists").length ;
            var VisiblePlaylistVid;
            var NextPlaylistVid;
            

            if ($(element).isInViewport()) {
                VisiblePlaylistVid = index + 1;
                NextPlaylistVid = index + 1;
                
                $("#counter-sectionInViewport").text(VisiblePlaylistVid + "/" + playlistsTotal);
                console.log(VisiblePlaylistVid + "/" + playlistsTotal);
                
                
            }
            


        });
        
    });


/* Voegt en lijn toe in het menu onder de huidige sectie */
 
    
// Get all menu items and sections
const menuItems = document.querySelectorAll('#menu li');
const sections = document.querySelectorAll('section');

// Add scroll event listener
window.addEventListener('scroll', () => {
  // Get current scroll position
  const scrollPosition = window.scrollY;

  // Loop through each section
  sections.forEach((section, index) => {
    // Calculate section's top and bottom positions
    const sectionTop = section.offsetTop;
    const sectionBottom = sectionTop + section.offsetHeight;

    // Check if section is in viewport
    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
      // Remove current class from all menu items
      menuItems.forEach((item) => {
        item.classList.remove('current');
      });

      // Add current class to the corresponding menu item
      menuItems[index].classList.add('current');
    }
  });
});
   








