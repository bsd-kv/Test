document.addEventListener('DOMContentLoaded', () => {
	const accordions = document.querySelectorAll('.spoiler');

	accordions.forEach(el => {
		el.addEventListener('click', (e) => {
			const self = e.currentTarget;
			const control = self.querySelector('.spoiler__control');
			const content = self.querySelector('.spoiler__content');

			self.classList.toggle('open');

			if (self.classList.contains('open')) {
				control.setAttribute('open', true);
				content.setAttribute('close', false);
				content.style.maxHeight = content.scrollHeight + 'px';
			} else {
				control.setAttribute('open', false);
				content.setAttribute('close', true);
				content.style.maxHeight = null;
			}
		});
	});
});