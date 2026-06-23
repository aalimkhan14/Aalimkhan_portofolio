
export function scrollWithOffset(id: string, offset: number) {
    const el = document.getElementById(id);
    if (!el) return;

    const top = el.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
        top,
        behavior: 'smooth'
    });

    history.pushState(null, '', '#' + id);
}

export function handleDownloadClick(event?: Event) {
    if (event) event.preventDefault();

    const el = document.getElementById('download');

    if (el) {
        // If the element exists on the current page → scroll
        if (window.innerWidth < 768) scrollWithOffset('download', -300);
        else el.scrollIntoView({ behavior: 'smooth' });
        history.pushState(null, '', '#download');
    } else {
        // If not on the same page → navigate to home with hash
        window.location.href = '/#download';
    }
}


export function handleSectionClick(
	event: Event | undefined,
	sectionId: string,
	mobileOffset = 100
) {
	if (event) event.preventDefault();

	const el = document.getElementById(sectionId);

	if (!el) {
		window.location.href = `/#${sectionId}`;
		return;
	}

	if (window.innerWidth < 1500) {
		scrollWithOffset(sectionId, mobileOffset);
	} else {
		el.scrollIntoView({ behavior: "smooth" });
	}

	history.pushState(null, "", "#" + sectionId);
}



export function scrollToTop(event?: Event) {
    if (event) event.preventDefault();

    if (window.location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        history.pushState(null, '', '/');
    } else {
        window.location.href = '/';
    }
}
