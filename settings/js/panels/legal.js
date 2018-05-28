$(document).ready(function() {
	$('#legal_imprint').change(function () {
		OC.msg.startSaving('#legal_imprint');
		var post = {
			imprint_url : $("#legal_imprint").val()
		};
		$.post(OC.generateUrl('/settings/admin/legal/imprint'), post, function (data) {
			OC.msg.finishedSaving('#legal_imprint_msg', data);
		});
	});
	$('#legal_privacy_policy').change(function () {
		OC.msg.startSaving('#legal_privacy_policy');
		var post = {
			imprint : $("#legal_privacy_policy").val()
		};
		$.post(OC.generateUrl('/settings/admin/legal/privacypolicy'), post, function (data) {
			OC.msg.finishedSaving('#legal_privacy_policy_msg', data);
		});
	});
});
