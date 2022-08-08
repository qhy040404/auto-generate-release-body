# auto-generate-release-body

This is a GitHub action to generate Release changelog.

这是一个用于自动创建 Release 更新日志的 GitHub action

## How to use / 如何使用

```yaml
- name: Generate release body
  uses: qhy040404/auto-generate-release-body@v1.0.0
  with:
    changelog: 'Changelog.md' # Changelog filename
    template: 'RELEASE_TEMPLATE.md' # Template filename
    tag: ${{ github.ref_name }} # New tag name
    template-data: 'This is an example' # Template replaceable data
    fore-delimiter: '\n'
    back-delimiter: '\n'
```