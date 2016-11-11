// animation eng
$(function() {
	AOS.init();
});

// burger`s mechanik
$body = $("body");
$menuTrigger = $("#menu__trigger");

$menuTrigger.on("click", function () {
	if ($body.hasClass("menu__open")) {
		$body.removeClass("menu__open");
		$(this).removeClass("active__mod");
	} else {
		$body.addClass("menu__open");
		$(this).addClass("active__mod");
	}
});

// menu scroll
$(".top-nav, .footer__nav").on("click", "a", function(event) {
	event.preventDefault();
	if ($body.hasClass("menu__open")) {
		$body.removeClass("menu__open");
		$menuTrigger.removeClass("active__mod");
	}
	var id = $(this).attr("href"),
		top = $(id).offset().top;
	$("body,html").animate({
		scrollTop: top
	}, 1500);
});

// order scroll
$(".order-btn").click(function() {
	var el = $(this).attr("href");
	$("body,html").animate({
		scrollTop: $(el).offset().top
	}, 2000);
	return false;
});

// back to top
$("#back-top").hide();

$(window).scroll(function() {
	if ($(this).scrollTop() > 100) {
		$("#back-top").fadeIn();
	} else {
		$("#back-top").fadeOut();
	}
});

$("#back-top").click(function() {
	$("body,html").animate({
		scrollTop: 0
	}, 500);
	return false;
});

// order send
$("#order").submit(function() {
	$.ajax({
		type: "POST",
		url: "mail.php",
		data: $(this).serialize()
	}).done(function() {
		$(this).find("input").val("");
		// open modal
		$("#modal_order").addClass("modal_show");
		$(".modal_bg").css("display", "block");
		// close
		$("#modal_close").click(function() {
			$("#modal_order").removeClass("modal_show");
			$(".modal_bg").css("display", "none");
		});
		$(".modal_bg").click(function() {
			$("#modal_order").removeClass("modal_show");
			$(".modal_bg").css("display", "none");
		})
		$("#order").trigger("reset");
	});
	return false;
});

// easy form validate
function validateForm(dir) {
    var form = dir;
    var name, phone;
    var error = [];
    // var checking;
    form.find("#order").html("");
    name = form.find("#name").val();
    phone = form.find("#phone").val();
    if (name === "") {
        error.push("Введите имя*");
    } else
    if (!/[А-Яа-яЁёa-zA-Z`\s]{1,100}/.test(name)) {
        error.push("*Мы ждём от Вас корректного имени");
    }
    if (phone === "") {
        error.push("Введите телефон*");
    } else
    if (!/[0-9()-\s+]{3,20}/.test(phone)) {
        error.push("*Введите корректный телефон");
    }
    if (error.length > 0) {
        $.each(error, function() {
            form.find(".order__error").append(this + "<br>");
        });
        return false;
    }
    return true;
}

$(".order-btn").on("submit", function(e) {
    var valid = validateForm($(this));
    if (!valid) {
        return false;
    }
});
