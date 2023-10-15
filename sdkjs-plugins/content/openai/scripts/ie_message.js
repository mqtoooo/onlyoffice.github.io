/**
 *
 * (c) Copyright Ascensio System SIA 2020
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *	 http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
(function(window, undefined) {

	window.oncontextmenu = function(e) {
		if (e.preventDefault)
			e.preventDefault();
		if (e.stopPropagation)
			e.stopPropagation();
		return false;
	};

	window.Asc.plugin.init = function() {};

	window.Asc.plugin.onThemeChanged = function(theme)
	{
		window.Asc.plugin.onThemeChangedBase(theme);
	};

	window.Asc.plugin.button = function() {
		this.executeCommand("close", "");
	};

	window.Asc.plugin.onTranslate = function() {
		var elem = document.getElementById("message");
		if (elem) {
			elem.innerHTML = window.Asc.plugin.tr(elem.innerHTML);
		}
	};
	
})(window, undefined);