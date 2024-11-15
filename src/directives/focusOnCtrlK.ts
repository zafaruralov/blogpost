import { DirectiveBinding } from "vue";

const focusOnCtrlK = {
	mounted(el: HTMLElement, binding: DirectiveBinding) {
		function handleShortcut(event: KeyboardEvent) {
			if ((event.metaKey || event.ctrlKey) && event.key === "k") {
				event.preventDefault();
				el.focus();
			}
		}

		window.addEventListener("keydown", handleShortcut);
		(el as any)._handleShortcut = handleShortcut;
	},
	unmounted(el: HTMLElement) {
		window.removeEventListener("keydown", (el as any)._handleShortcut);
	}
};

export default focusOnCtrlK;
