CKEDITOR.replace( 'editor' );

$( "#showXML_button" ).click(function() {

	var html_content = CKEDITOR.instances.editor.getData();
  $( "#html_content" ).html(html_content);
  $( "#xml_content" ).html(HTMLtoXML(html_content));

});