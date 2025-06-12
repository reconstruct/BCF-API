install-pre-commit:
	@echo "Installing pre-commit python package through PIP"
	pip3 install pre-commit
	@echo "pre-commit installed successfully"

git-hooks:	install-pre-commit
	@echo "Configuring Reconstruct's Git hooks"
	pre-commit install --hook-type pre-commit --hook-type commit-msg --hook-type pre-push
	@echo "Reconstruct's Git hooks installed successfully"
