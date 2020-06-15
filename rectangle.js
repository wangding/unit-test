$(function() {
  // get dom elem
  var $width = $('#width'),
      $height = $('#height'),
      $btnCal = $('#calculate'),
      $perimeter = $('#perimeter'),
      $area = $('#area');

  /* calc btn click event */
  $btnCal.click(function(){
    // get value
    var w = $width.val(),
        h = $height.val();

    var rect = new Rectangle(w, h);

    // output
    $perimeter.val(rect.perimeter());
    $area.val(rect.area());
  });
});
