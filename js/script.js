(function($) {
	$( document ).ready( function() {
		/**
		 * add notice about changing on the settings page 
		 */
		$( '#sbscrbr_settings_form input' ).bind( "change click select", function() {
			if ( $( this ).attr( 'type' ) != 'submit' ) {
				$( '.updated.fade, .error' ).css( 'display', 'none' );
				$( '#sbscrbr-settings-notice' ).css( 'display', 'block' );
			};
		});

		/**
		 * show/hide neccessary blocks on settings page
		 */
		$( '#sbscrbr-show-service-messages, #sbscrbr-show-messages-settings' ).show();		
		$( '.sbscrbr-service-messages, .sbscrbr-messages-settings' ).hide();
		$( '#sbscrbr-show-service-messages' ).click( function() {
			$( '.sbscrbr-service-messages, #sbscrbr-hide-service-messages').show();
			$( this ).hide();
		});
		$( '#sbscrbr-hide-service-messages' ).click( function() {
			$( '#sbscrbr-show-service-messages' ).show();
			$( '.sbscrbr-service-messages' ).hide();
			$( this ).hide();
		});
		$( '#sbscrbr-show-messages-settings' ).click( function() {
			$( '.sbscrbr-messages-settings, #sbscrbr-hide-messages-settings').show();
			$( this ).hide();
		});
		$( '#sbscrbr-hide-messages-settings' ).click( function() {
			$( '#sbscrbr-show-messages-settings' ).show();
			$( '.sbscrbr-messages-settings' ).hide(); 
			$( this ).hide();
		});		
	});
})(jQuery);
