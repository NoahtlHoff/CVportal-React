export default function Footer(){
    return(
        <footer>
        <div class="footer-container">
          <div class="about-footer">
            <h3>ABOUT ME</h3>
            <p>
              Welcome to my website! I'm Noah Hoff, a developer and designer passionate about modern web experiences.
              I specialize in responsive design and intuitive digital solutions.
              <a href="about-dropdown/about-me.html" class="read-more">READ MORE</a>
            </p>
          </div>
          <div class="contact-social">
            <div class="contact-follow">
              <a href="contact.html" class="contact-me">CONTACT ME</a>
              <span class="divider">//</span>
              <span class="follow">FOLLOW ME:</span>
            </div>
            <ul class="social">
              <li><a href="#"><i class="fa-brands fa-linkedin"></i></a></li>
              <li><a href="#"><i class="fa-brands fa-github"></i></a></li>
              <li><a href="#"><i class="fa-brands fa-facebook"></i></a></li>
              <li><a href="#"><i class="fab fa-instagram"></i></a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          &copy; 2025 Noah Hoff. All rights reserved.
        </div>
      </footer>
    );
}