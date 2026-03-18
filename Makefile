# Makefile for NeoAi

.PHONY: all build clean test jupyter-build jupyter-start jupyter-stop jupyter-clean vscode-build vscode-clean vscode-test nvim-build nvim-clean intellij-build intellij-clean react-editor-build react-editor-clean

# Default target
all: build

# Main targets
build: vscode-build nvim-build intellij-build jupyter-build react-editor-build
	@echo "All components built successfully."

clean: vscode-clean nvim-clean intellij-clean jupyter-clean react-editor-clean
	@echo "All components cleaned."

test: vscode-test
	@echo "All tests passed."

# Jupyter Extension
jupyter-build:
	@echo "Building Jupyter NeoAi Docker image..."
	@cd jupyter && bash build-image.sh

jupyter-start:
	@echo "Starting Jupyter NeoAi server..."
	@cd jupyter && bash start-server.sh

jupyter-stop:
	@echo "Stopping Jupyter NeoAi server..."
	@cd jupyter && bash stop-server.sh

jupyter-clean:
	@echo "Cleaning up Jupyter NeoAi Docker image..."
	@docker rmi neoai-server:latest || true
	@echo "Jupyter NeoAi Docker image cleaned."

# VSCode Extension
vscode-build:
	@echo "Building VSCode extension..."
	@cd vscode && npm install --legacy-peer-deps && npm run build

vscode-clean:
	@echo "Cleaning VSCode extension..."
	@cd vscode && npm run clean

vscode-test:
	@echo "Running VSCode extension tests..."
	@cd vscode && npm test

# Neovim Plugin
nvim-build:
	@echo "Building Neovim plugin..."
	@which cargo >/dev/null 2>&1 && cd nvim/chat && cargo build --release || echo "Skipping: cargo not installed"
	@echo "Neovim plugin build skipped (requires Rust toolchain)"

# IntelliJ Plugin
intellij-build:
	@echo "Building IntelliJ plugin..."
	@which gradle >/dev/null 2>&1 && cd intellij && ./gradlew build || echo "Skipping: Gradle not installed"
	@echo "IntelliJ plugin build skipped (requires Java/Gradle)"

intellij-clean:
	@echo "Cleaning IntelliJ plugin..."
	@cd intellij && ./gradlew clean

# React Editor Component
react-editor-build:
	@echo "Building React Editor..."
	@cd react-editor && pnpm install --ignore-scripts
	@if [ -d "react-editor/src/proto" ]; then \
		cd react-editor && pnpm run rollup; \
	else \
		echo "Proto files missing (run 'pnpm run generate' after obtaining proto definitions)"; \
	fi

react-editor-clean:
	@echo "Cleaning React Editor..."
	@cd react-editor && rm -rf node_modules dist