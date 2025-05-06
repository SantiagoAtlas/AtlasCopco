import pandas as pd
import os

# Path to your Excel file
file_path = r'C:\Data\docusaurus\AtlasCopco\overview.xlsx'

# Name of the specific sheet to convert
sheet_name = 'SYS MQTT Standard'

# Check if the file exists
if not os.path.exists(file_path):
    raise FileNotFoundError(f"❌ File not found: {file_path}")

# Read the specified sheet
df = pd.read_excel(file_path, sheet_name=sheet_name)

# Clean up the data
df = df.dropna(axis=1, how='all')  # Remove completely empty columns
df = df.fillna('')  # Replace NaN with empty strings

# Replace problematic characters in cells
def clean_cell(cell):
    if isinstance(cell, str):
        # Escape curly braces
        cell = cell.replace('{', '&#123;').replace('}', '&#125;')
        # Optional: replace double quotes
        # cell = cell.replace('"', "'")
    return cell

# Apply cleaning to the entire DataFrame
df = df.applymap(clean_cell)

# Convert the DataFrame to Markdown format
markdown = df.to_markdown(index=False)

# Output path for the Markdown file
output_path = r'C:\Data\docusaurus\AtlasCopco\docs\MQTT SYS Standard.md'

# Save the Markdown table to the file
with open(output_path, 'w', encoding='utf-8') as f:
    f.write(markdown)

print("✅ Markdown table generated successfully:")
print(output_path)
