var userName = "Variable";
var homeContent = `<div class="home">
<h1>HOME</h1>
<p>
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem et enim impedit sed saepe, in, eaque consequatur ab temporibus explicabo, fuga fugit itaque! Fuga, in blanditiis hic accusamus ipsa corporis quas numquam debitis? Ex, obcaecati minima aut sed, autem provident labore error minus quod ipsa nesciunt itaque excepturi hic suscipit. Ipsa saepe totam omnis voluptatem vero sequi at suscipit! Voluptatum aperiam sed pariatur. Quia accusamus temporibus dolores nam quisquam laboriosam, voluptate impedit explicabo ad autem veniam dolore cumque nobis, quibusdam vel! Enim voluptate doloremque natus beatae aliquam totam modi impedit quidem architecto non ipsam ratione eius itaque, facere saepe dolore!
</p>
</div>`;
var aboutContent = `<div class="about">
<h1>ABOUT</h1>
<p>
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem et enim impedit sed saepe, in, eaque consequatur ab temporibus explicabo, fuga fugit itaque! Fuga, in blanditiis hic accusamus ipsa corporis quas numquam debitis? Ex, obcaecati minima aut sed, autem provident labore error minus quod ipsa nesciunt itaque excepturi hic suscipit. Ipsa saepe totam omnis voluptatem vero sequi at suscipit! Voluptatum aperiam sed pariatur. Quia accusamus temporibus dolores nam quisquam laboriosam, voluptate impedit explicabo ad autem veniam dolore cumque nobis, quibusdam vel! Enim voluptate doloremque natus beatae aliquam totam modi impedit quidem architecto non ipsam ratione eius itaque, facere saepe dolore!
</p>
</div>`;

// this is an example of a named function
function init() {
// this is where the instructions go
// this is a click listener that will get the link id
    $("nav a").click(function (e) {
        let btnId = this.id;
        let contentID = btnId + "Content";
        
        $("#app").html(eval(contentID));
    });
}

// this checks for all the elements to be ready by the browser
$(document).ready(function () {
    init();
})