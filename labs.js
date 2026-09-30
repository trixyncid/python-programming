window.LABS = {
  "fundamentals-i": {
    "01":     [
      {
        "title": "Greet by name",
        "prompt": "name is already set. Print one line: Hello, a comma, a space, and the name.",
        "starter": "# name is already set. Do not assign it yourself.\n# Print one line: Hello, a comma, a space, and the name.\n#\n# Given:  name = \"Ana\"\n# Output:\n# Hello, Ana\n",
        "output": "Hello, Ana",
        "tests": [
          {
            "name": "Ana",
            "setup": "name = \"Ana\"",
            "code": "assert _printed.strip() == \"Hello, Ana\", \"expected Hello, Ana\""
          },
          {
            "name": "Ben",
            "setup": "name = \"Ben\"",
            "code": "assert _printed.strip() == \"Hello, Ben\", \"expected Hello, Ben\""
          },
          {
            "name": "Li",
            "setup": "name = \"Li\"",
            "code": "assert _printed.strip() == \"Hello, Li\", \"expected Hello, Li\""
          }
        ]
      },
      {
        "title": "Average of three scores",
        "prompt": "a, b, and c are already set. Print their average on one line. Division prints a decimal, so 90 becomes 90.0.",
        "starter": "# a, b, and c are already set. Do not assign them yourself.\n# Print their average on one line.\n#\n# Given:  a, b, c = 80, 90, 100\n# Output:\n# 90.0\n",
        "output": "90.0",
        "tests": [
          {
            "name": "even split",
            "setup": "a, b, c = 80, 90, 100",
            "code": "assert abs(float(_printed.strip()) - 90) < 1e-6, \"expected 90\""
          },
          {
            "name": "zeros",
            "setup": "a, b, c = 0, 0, 0",
            "code": "assert float(_printed.strip()) == 0, \"expected 0\""
          },
          {
            "name": "mixed",
            "setup": "a, b, c = 1, 2, 3",
            "code": "assert abs(float(_printed.strip()) - 2) < 1e-6, \"expected 2\""
          }
        ]
      },
      {
        "title": "Write a comment line",
        "prompt": "text is already set. Print one line: a hash, a space, then the text.",
        "starter": "# text is already set. Do not assign it yourself.\n# Print a hash, a space, and the text.\n#\n# Given:  text = \"Remember\"\n# Output:\n# # Remember\n",
        "output": "# Remember",
        "tests": [
          {
            "name": "remember",
            "setup": "text = \"Remember\"",
            "code": "assert _printed.strip() == \"# Remember\", \"expected # Remember\""
          },
          {
            "name": "two words",
            "setup": "text = \"Check the steps\"",
            "code": "assert _printed.strip() == \"# Check the steps\""
          },
          {
            "name": "short",
            "setup": "text = \"Hi\"",
            "code": "assert _printed.strip() == \"# Hi\""
          }
        ]
      },
      {
        "title": "Print three lines",
        "prompt": "line1, line2, and line3 are already set. Print each value on its own line, in that order. A blank value still takes a line.",
        "starter": "# line1, line2, and line3 are already set. Do not assign them yourself.\n# Print each value on its own line.\n#\n# Given:  line1, line2, line3 = \"Plan\", \"Write\", \"Run\"\n# Output:\n# Plan\n# Write\n# Run\n",
        "output": "Plan\nWrite\nRun",
        "tests": [
          {
            "name": "steps",
            "setup": "line1, line2, line3 = \"Plan\", \"Write\", \"Run\"",
            "code": "assert _printed.splitlines() == [\"Plan\", \"Write\", \"Run\"]"
          },
          {
            "name": "numbers as text",
            "setup": "line1, line2, line3 = \"1\", \"2\", \"3\"",
            "code": "assert _printed.splitlines() == [\"1\", \"2\", \"3\"]"
          },
          {
            "name": "blank middle",
            "setup": "line1, line2, line3 = \"Start\", \"\", \"End\"",
            "code": "assert _printed.splitlines() == [\"Start\", \"\", \"End\"]"
          }
        ]
      }
    ],
    "02":     [
      {
        "title": "Describe a student",
        "prompt": "name and score are already set. Print one line: the name, a space, the word scored, a space, and the score.",
        "starter": "# name and score are already set. Do not assign them yourself.\n# Print: name, the word scored, and the score.\n#\n# Given:  name, score = \"Ana\", 95\n# Output:\n# Ana scored 95\n",
        "output": "Ana scored 95",
        "tests": [
          {
            "name": "Ana",
            "setup": "name, score = \"Ana\", 95",
            "code": "assert _printed.strip() == \"Ana scored 95\""
          },
          {
            "name": "zero",
            "setup": "name, score = \"Ben\", 0",
            "code": "assert _printed.strip() == \"Ben scored 0\""
          }
        ]
      },
      {
        "title": "Convert text to int",
        "prompt": "text is already set. It is text, even when it looks like a number. Convert it to an integer and print that integer on one line.",
        "starter": "# text is already set. Do not assign it yourself.\n# Convert text to an integer and print it.\n#\n# Given:  text = \"95\"\n# Output:\n# 95\n#\n# Given:  text = \" 4 \"\n# Output:\n# 4\n",
        "output": "95",
        "tests": [
          {
            "name": "95",
            "setup": "text = \"95\"",
            "code": "assert int(_printed.strip()) == 95"
          },
          {
            "name": "zero",
            "setup": "text = \"0\"",
            "code": "assert int(_printed.strip()) == 0"
          },
          {
            "name": "spaces",
            "setup": "text = \" 4 \"",
            "code": "assert int(_printed.strip()) == 4"
          }
        ]
      },
      {
        "title": "Convert text to float",
        "prompt": "text is already set. Convert it to a decimal and print that decimal. A whole number such as 3 prints as 3.0.",
        "starter": "# text is already set. Do not assign it yourself.\n# Convert text to a decimal and print it.\n#\n# Given:  text = \"88.5\"\n# Output:\n# 88.5\n#\n# Given:  text = \"3\"\n# Output:\n# 3.0\n",
        "output": "88.5",
        "tests": [
          {
            "name": "88.5",
            "setup": "text = \"88.5\"",
            "code": "assert abs(float(_printed.strip()) - 88.5) < 1e-6"
          },
          {
            "name": "whole number",
            "setup": "text = \"3\"",
            "code": "assert float(_printed.strip()) == 3.0"
          }
        ]
      },
      {
        "title": "Passing score",
        "prompt": "score is already set. Print True when score is at least 75. Otherwise print False. Print the word, not a sentence.",
        "starter": "# score is already set. Do not assign it yourself.\n# Print True or False.\n#\n# Given:  score = 80\n# Output:\n# True\n#\n# Given:  score = 74\n# Output:\n# False\n",
        "output": "True",
        "tests": [
          {
            "name": "75",
            "setup": "score = 75",
            "code": "assert _printed.strip() == \"True\""
          },
          {
            "name": "74",
            "setup": "score = 74",
            "code": "assert _printed.strip() == \"False\""
          },
          {
            "name": "100",
            "setup": "score = 100",
            "code": "assert _printed.strip() == \"True\""
          }
        ]
      },
      {
        "title": "Report the type",
        "prompt": "value is already set. Print type(value) on one line. Python prints the type inside angle brackets.",
        "starter": "# value is already set. Do not assign it yourself.\n# Print type(value).\n#\n# Given:  value = 3\n# Output:\n# <class 'int'>\n",
        "output": "<class 'int'>",
        "tests": [
          {
            "name": "int",
            "setup": "value = 3",
            "code": "assert _printed.strip() == \"<class 'int'>\""
          },
          {
            "name": "float",
            "setup": "value = 1.5",
            "code": "assert _printed.strip() == \"<class 'float'>\""
          },
          {
            "name": "str",
            "setup": "value = \"Ana\"",
            "code": "assert _printed.strip() == \"<class 'str'>\""
          },
          {
            "name": "bool",
            "setup": "value = True",
            "code": "assert _printed.strip() == \"<class 'bool'>\""
          }
        ]
      }
    ],
    "03":     [
      {
        "title": "Price with tax",
        "prompt": "price and rate are already set. Print price plus price times rate, on one line. The result is a decimal.",
        "starter": "# price and rate are already set. Do not assign them yourself.\n# Print price plus price times rate.\n#\n# Given:  price, rate = 100, 0.12\n# Output:\n# 112.0\n",
        "output": "112.0",
        "tests": [
          {
            "name": "twelve percent",
            "setup": "price, rate = 100, 0.12",
            "code": "assert abs(float(_printed.strip()) - 112) < 1e-6, \"expected 112\""
          },
          {
            "name": "no tax",
            "setup": "price, rate = 80, 0",
            "code": "assert float(_printed.strip()) == 80, \"expected 80\""
          },
          {
            "name": "half",
            "setup": "price, rate = 10, 0.5",
            "code": "assert abs(float(_printed.strip()) - 15) < 1e-6, \"expected 15\""
          }
        ]
      },
      {
        "title": "Both conditions",
        "prompt": "score and attendance are already set. Print True only when score is at least 75 and attendance is at least 0.8. Otherwise print False.",
        "starter": "# score and attendance are already set. Do not assign them yourself.\n# Print True only when both conditions hold.\n#\n# Given:  score, attendance = 80, 0.9\n# Output:\n# True\n#\n# Given:  score, attendance = 70, 0.9\n# Output:\n# False\n",
        "output": "True",
        "tests": [
          {
            "name": "both",
            "setup": "score, attendance = 80, 0.9",
            "code": "assert _printed.strip() == \"True\""
          },
          {
            "name": "low score",
            "setup": "score, attendance = 70, 0.9",
            "code": "assert _printed.strip() == \"False\""
          },
          {
            "name": "low attendance",
            "setup": "score, attendance = 90, 0.5",
            "code": "assert _printed.strip() == \"False\""
          }
        ]
      },
      {
        "title": "Whole division and remainder",
        "prompt": "n and d are already set. Print the whole-number division and the remainder on one line, separated by one space.",
        "starter": "# n and d are already set. Do not assign them yourself.\n# Print the whole-number division, a space, and the remainder.\n#\n# Given:  n, d = 7, 2\n# Output:\n# 3 1\n",
        "output": "3 1",
        "tests": [
          {
            "name": "7 and 2",
            "setup": "n, d = 7, 2",
            "code": "assert _printed.strip() == \"3 1\""
          },
          {
            "name": "exact",
            "setup": "n, d = 8, 4",
            "code": "assert _printed.strip() == \"2 0\""
          },
          {
            "name": "one",
            "setup": "n, d = 5, 1",
            "code": "assert _printed.strip() == \"5 0\""
          }
        ]
      },
      {
        "title": "Inside a range",
        "prompt": "n, low, and high are already set. Print True when n is from low through high, including both ends. Otherwise print False.",
        "starter": "# n, low, and high are already set. Do not assign them yourself.\n# Print True when n is inside the range, including the ends.\n#\n# Given:  n, low, high = 5, 1, 10\n# Output:\n# True\n#\n# Given:  n, low, high = 0, 1, 10\n# Output:\n# False\n",
        "output": "True",
        "tests": [
          {
            "name": "middle",
            "setup": "n, low, high = 5, 1, 10",
            "code": "assert _printed.strip() == \"True\""
          },
          {
            "name": "low edge",
            "setup": "n, low, high = 1, 1, 10",
            "code": "assert _printed.strip() == \"True\""
          },
          {
            "name": "high edge",
            "setup": "n, low, high = 10, 1, 10",
            "code": "assert _printed.strip() == \"True\""
          },
          {
            "name": "outside",
            "setup": "n, low, high = 0, 1, 10",
            "code": "assert _printed.strip() == \"False\""
          }
        ]
      }
    ],
    "04":     [
      {
        "title": "Letter grade",
        "prompt": "score is already set. Print one letter: A for 90 and above, B for 75 to 89, and C below 75.",
        "starter": "# score is already set. Do not assign it yourself.\n# Print A, B, or C.\n#\n# Given:  score = 90\n# Output:\n# A\n#\n# Given:  score = 75\n# Output:\n# B\n#\n# Given:  score = 74\n# Output:\n# C\n",
        "output": "A",
        "tests": [
          {
            "name": "A",
            "setup": "score = 90",
            "code": "assert _printed.strip() == \"A\""
          },
          {
            "name": "B",
            "setup": "score = 75",
            "code": "assert _printed.strip() == \"B\""
          },
          {
            "name": "C",
            "setup": "score = 74",
            "code": "assert _printed.strip() == \"C\""
          }
        ]
      },
      {
        "title": "Pass or another attempt",
        "prompt": "score is already set. Print Pass when score is at least 75. Otherwise print Needs another attempt.",
        "starter": "# score is already set. Do not assign it yourself.\n# Print Pass, or Needs another attempt.\n#\n# Given:  score = 75\n# Output:\n# Pass\n#\n# Given:  score = 74\n# Output:\n# Needs another attempt\n",
        "output": "Pass",
        "tests": [
          {
            "name": "pass",
            "setup": "score = 75",
            "code": "assert _printed.strip() == \"Pass\""
          },
          {
            "name": "retake",
            "setup": "score = 74",
            "code": "assert _printed.strip() == \"Needs another attempt\""
          }
        ]
      },
      {
        "title": "Submission status",
        "prompt": "submitted and score are already set. If submitted is False, print Waiting. If the score is at least 75, print Recorded: pass. Otherwise print Recorded: retake.",
        "starter": "# submitted and score are already set. Do not assign them yourself.\n# Print Waiting, Recorded: pass, or Recorded: retake.\n#\n# Given:  submitted, score = False, 100\n# Output:\n# Waiting\n#\n# Given:  submitted, score = True, 80\n# Output:\n# Recorded: pass\n#\n# Given:  submitted, score = True, 50\n# Output:\n# Recorded: retake\n",
        "output": "Waiting",
        "tests": [
          {
            "name": "waiting",
            "setup": "submitted, score = False, 100",
            "code": "assert _printed.strip() == \"Waiting\""
          },
          {
            "name": "pass",
            "setup": "submitted, score = True, 80",
            "code": "assert _printed.strip() == \"Recorded: pass\""
          },
          {
            "name": "retake",
            "setup": "submitted, score = True, 50",
            "code": "assert _printed.strip() == \"Recorded: retake\""
          }
        ]
      },
      {
        "title": "Age band",
        "prompt": "age is already set. Print child when age is under 13, adult from 13 through 64, and senior from 65.",
        "starter": "# age is already set. Do not assign it yourself.\n# Print child, adult, or senior.\n#\n# Given:  age = 12\n# Output:\n# child\n#\n# Given:  age = 30\n# Output:\n# adult\n#\n# Given:  age = 65\n# Output:\n# senior\n",
        "output": "child",
        "tests": [
          {
            "name": "child",
            "setup": "age = 12",
            "code": "assert _printed.strip() == \"child\""
          },
          {
            "name": "adult",
            "setup": "age = 13",
            "code": "assert _printed.strip() == \"adult\""
          },
          {
            "name": "older adult",
            "setup": "age = 64",
            "code": "assert _printed.strip() == \"adult\""
          },
          {
            "name": "senior",
            "setup": "age = 65",
            "code": "assert _printed.strip() == \"senior\""
          }
        ]
      }
    ],
    "05":     [
      {
        "title": "Total from 1 to limit",
        "prompt": "limit is already set. Use a for loop to add the numbers from 1 through limit, then print the sum on one line. When limit is 0, print 0.",
        "starter": "# limit is already set. Do not assign it yourself.\n# Add 1 through limit and print the sum.\n#\n# Given:  limit = 3\n# Output:\n# 6\n#\n# Given:  limit = 0\n# Output:\n# 0\n",
        "output": "6",
        "tests": [
          {
            "name": "three",
            "setup": "limit = 3",
            "code": "assert int(_printed.strip()) == 6"
          },
          {
            "name": "one",
            "setup": "limit = 1",
            "code": "assert int(_printed.strip()) == 1"
          },
          {
            "name": "zero",
            "setup": "limit = 0",
            "code": "assert int(_printed.strip()) == 0"
          }
        ]
      },
      {
        "title": "Count values in range",
        "prompt": "limit and minimum are already set. Count how many numbers from 1 through limit are at least minimum, then print that count on one line.",
        "starter": "# limit and minimum are already set. Do not assign them yourself.\n# Print how many numbers from 1 through limit are at least minimum.\n#\n# Given:  limit, minimum = 10, 8\n# The numbers are 8, 9, and 10.\n# Output:\n# 3\n",
        "output": "3",
        "tests": [
          {
            "name": "three",
            "setup": "limit, minimum = 10, 8",
            "code": "assert int(_printed.strip()) == 3"
          },
          {
            "name": "none",
            "setup": "limit, minimum = 5, 10",
            "code": "assert int(_printed.strip()) == 0"
          },
          {
            "name": "one",
            "setup": "limit, minimum = 4, 4",
            "code": "assert int(_printed.strip()) == 1"
          }
        ]
      },
      {
        "title": "Stop before a number",
        "prompt": "stop is already set. Print the numbers from 1 up to, but not including, stop. Put each number on its own line. When stop is 1, print nothing.",
        "starter": "# stop is already set. Do not assign it yourself.\n# Print 1, 2, 3, and so on, and stop before stop.\n#\n# Given:  stop = 4\n# Output:\n# 1\n# 2\n# 3\n",
        "output": "1\n2\n3",
        "tests": [
          {
            "name": "before 4",
            "setup": "stop = 4",
            "code": "assert _printed.splitlines() == [\"1\", \"2\", \"3\"]"
          },
          {
            "name": "nothing",
            "setup": "stop = 1",
            "code": "assert _printed.splitlines() == []"
          },
          {
            "name": "before 3",
            "setup": "stop = 3",
            "code": "assert _printed.splitlines() == [\"1\", \"2\"]"
          }
        ]
      },
      {
        "title": "Skip even numbers",
        "prompt": "limit is already set. Print the odd numbers from 1 through limit. Put each number on its own line, and skip every even number.",
        "starter": "# limit is already set. Do not assign it yourself.\n# Print the odd numbers from 1 through limit, one per line.\n#\n# Given:  limit = 5\n# Output:\n# 1\n# 3\n# 5\n",
        "output": "1\n3\n5",
        "tests": [
          {
            "name": "through 5",
            "setup": "limit = 5",
            "code": "assert _printed.splitlines() == [\"1\", \"3\", \"5\"]"
          },
          {
            "name": "one",
            "setup": "limit = 1",
            "code": "assert _printed.splitlines() == [\"1\"]"
          },
          {
            "name": "through 2",
            "setup": "limit = 2",
            "code": "assert _printed.splitlines() == [\"1\"]"
          }
        ]
      }
    ],
    "06": [
      {
        "title": "Average of a list",
        "prompt": "Define average(scores). Return the mean. The list will not be empty.",
        "starter": "def average(scores):\n    pass\n",
        "tests": [
          {
            "name": "three",
            "setup": "",
            "code": "assert abs(average([80, 90, 100]) - 90) < 1e-6"
          },
          {
            "name": "one",
            "setup": "",
            "code": "assert average([5]) == 5"
          }
        ]
      },
      {
        "title": "Clamp a number",
        "prompt": "Define clamp(n, low, high). Return low when n is below low, high when n is above high, otherwise n.",
        "starter": "def clamp(n, low, high):\n    pass\n",
        "tests": [
          {
            "name": "inside",
            "setup": "",
            "code": "assert clamp(5, 0, 10) == 5"
          },
          {
            "name": "low",
            "setup": "",
            "code": "assert clamp(-3, 0, 10) == 0"
          },
          {
            "name": "high",
            "setup": "",
            "code": "assert clamp(12, 0, 10) == 10"
          }
        ]
      },
      {
        "title": "Repeat text",
        "prompt": "Define repeat_text(word, times). Return the word concatenated times times.",
        "starter": "def repeat_text(word, times):\n    pass\n",
        "tests": [
          {
            "name": "ha",
            "setup": "",
            "code": "assert repeat_text(\"ha\", 3) == \"hahaha\""
          },
          {
            "name": "zero",
            "setup": "",
            "code": "assert repeat_text(\"ha\", 0) == \"\""
          },
          {
            "name": "one",
            "setup": "",
            "code": "assert repeat_text(\"ab\", 1) == \"ab\""
          }
        ]
      },
      {
        "title": "Initials",
        "prompt": "Define initials(first, last). Return the first letter of each name in uppercase, with a period after each letter, such as A.C.",
        "starter": "def initials(first, last):\n    pass\n",
        "tests": [
          {
            "name": "Ana Cruz",
            "setup": "",
            "code": "assert initials(\"ana\", \"cruz\") == \"A.C.\""
          },
          {
            "name": "already upper",
            "setup": "",
            "code": "assert initials(\"Ben\", \"Lee\") == \"B.L.\""
          }
        ]
      }
    ],
    "07": [
      {
        "title": "First and last",
        "prompt": "Define first_last(items). Return a tuple of the first item and the last item.",
        "starter": "def first_last(items):\n    pass\n",
        "tests": [
          {
            "name": "scores",
            "setup": "",
            "code": "assert first_last([80, 90, 100]) == (80, 100)"
          },
          {
            "name": "one",
            "setup": "",
            "code": "assert first_last(['Ana']) == ('Ana', 'Ana')"
          }
        ]
      },
      {
        "title": "Passing names",
        "prompt": "Define passing_names(records, minimum). records is a list of dictionaries with name and score. Return the names whose score is at least minimum.",
        "starter": "def passing_names(records, minimum):\n    pass\n",
        "tests": [
          {
            "name": "two records",
            "setup": "",
            "code": "assert passing_names([{\"name\": \"Ana\", \"score\": 95}, {\"name\": \"Ben\", \"score\": 70}], 75) == [\"Ana\"]"
          },
          {
            "name": "none",
            "setup": "",
            "code": "assert passing_names([{\"name\": \"Ben\", \"score\": 10}], 75) == []"
          }
        ]
      },
      {
        "title": "Unique names in order",
        "prompt": "Define sorted_unique(names). Return each name once, sorted alphabetically.",
        "starter": "def sorted_unique(names):\n    pass\n",
        "tests": [
          {
            "name": "duplicates",
            "setup": "",
            "code": "assert sorted_unique([\"Ben\", \"Ana\", \"Ana\"]) == [\"Ana\", \"Ben\"]"
          },
          {
            "name": "empty",
            "setup": "",
            "code": "assert sorted_unique([]) == []"
          }
        ]
      },
      {
        "title": "Membership",
        "prompt": "Define has_name(names, name). Return True when name appears in names.",
        "starter": "def has_name(names, name):\n    pass\n",
        "tests": [
          {
            "name": "present",
            "setup": "",
            "code": "assert has_name([\"Ana\", \"Ben\"], \"Ana\") is True"
          },
          {
            "name": "absent",
            "setup": "",
            "code": "assert has_name([\"Ana\"], \"Ben\") is False"
          }
        ]
      }
    ],
    "08": [
      {
        "title": "Clean a name",
        "prompt": "Define clean_name(raw). Strip surrounding spaces and return the name in title case.",
        "starter": "def clean_name(raw):\n    pass\n",
        "tests": [
          {
            "name": "spaces",
            "setup": "",
            "code": "assert clean_name(\"  ana cruz  \") == \"Ana Cruz\""
          },
          {
            "name": "already clean",
            "setup": "",
            "code": "assert clean_name(\"Ben Lee\") == \"Ben Lee\""
          }
        ]
      },
      {
        "title": "Score sentence",
        "prompt": "Define sentence(name, score). Return name scored score using an f-string or concatenation.",
        "starter": "def sentence(name, score):\n    pass\n",
        "tests": [
          {
            "name": "Ana",
            "setup": "",
            "code": "assert sentence(\"Ana\", 95) == \"Ana scored 95\""
          }
        ]
      },
      {
        "title": "Replace a word",
        "prompt": "Define swap_word(text, old, new). Return the text with every old replaced by new.",
        "starter": "def swap_word(text, old, new):\n    pass\n",
        "tests": [
          {
            "name": "status",
            "setup": "",
            "code": "assert swap_word(\"Ana,pass\", \"pass\", \"honors\") == \"Ana,honors\""
          },
          {
            "name": "missing",
            "setup": "",
            "code": "assert swap_word(\"Ana\", \"Ben\", \"Cole\") == \"Ana\""
          }
        ]
      },
      {
        "title": "Split fields",
        "prompt": "Define fields(line). Split on commas and strip spaces from each part.",
        "starter": "def fields(line):\n    pass\n",
        "tests": [
          {
            "name": "csv",
            "setup": "",
            "code": "assert fields(\"Ana, 95 , pass\") == [\"Ana\", \"95\", \"pass\"]"
          },
          {
            "name": "one",
            "setup": "",
            "code": "assert fields(\"Ana\") == [\"Ana\"]"
          }
        ]
      }
    ],
    "09": [
      {
        "title": "Write a note",
        "prompt": "Define write_note(path, text). Write text to that path, replacing the file if it exists.",
        "starter": "def write_note(path, text):\n    pass\n",
        "tests": [
          {
            "name": "hello",
            "setup": "",
            "code": "write_note(\"notes.txt\", \"Hello\\n\")\nwith open(\"notes.txt\") as handle:\n    assert handle.read() == \"Hello\\n\", \"file contents differ\""
          },
          {
            "name": "replace",
            "setup": "",
            "code": "write_note(\"notes.txt\", \"one\")\nwrite_note(\"notes.txt\", \"two\")\nwith open(\"notes.txt\") as handle:\n    assert handle.read() == \"two\""
          }
        ]
      },
      {
        "title": "Read a note",
        "prompt": "Define read_note(path). Return the full text of the file.",
        "starter": "def read_note(path):\n    pass\n",
        "tests": [
          {
            "name": "stored",
            "setup": "",
            "code": "open(\"notes.txt\",\"w\").write(\"Session notes\\n\")\nassert read_note(\"notes.txt\") == \"Session notes\\n\""
          }
        ]
      },
      {
        "title": "Names from a CSV",
        "prompt": "Define csv_names(path). The file has a header name,score. Return the list of names.",
        "starter": "def csv_names(path):\n    pass\n",
        "tests": [
          {
            "name": "two rows",
            "setup": "open(\"grades.csv\",\"w\",newline=\"\").write(\"name,score\\nAna,95\\nBen,70\\n\")",
            "code": "assert csv_names(\"grades.csv\") == [\"Ana\", \"Ben\"]"
          }
        ]
      },
      {
        "title": "Join a path",
        "prompt": "Define joined_path(folder, filename). Return the path from os.path.join.",
        "starter": "def joined_path(folder, filename):\n    pass\n",
        "tests": [
          {
            "name": "data file",
            "setup": "",
            "code": "assert joined_path(\"data\", \"notes.txt\") == \"data/notes.txt\""
          },
          {
            "name": "nested",
            "setup": "",
            "code": "import os\nassert joined_path(\"a\", \"b.txt\") == os.path.join(\"a\", \"b.txt\")"
          }
        ]
      }
    ],
    "10": [
      {
        "title": "Safe division",
        "prompt": "Define safe_divide(a, b). Return a / b. If b is 0, return None.",
        "starter": "def safe_divide(a, b):\n    pass\n",
        "tests": [
          {
            "name": "ten over two",
            "setup": "",
            "code": "assert safe_divide(10, 2) == 5"
          },
          {
            "name": "zero",
            "setup": "",
            "code": "assert safe_divide(10, 0) is None"
          },
          {
            "name": "fraction",
            "setup": "",
            "code": "assert abs(safe_divide(1, 2) - 0.5) < 1e-6"
          }
        ]
      },
      {
        "title": "Reject a bad score",
        "prompt": "Define set_score(score). Return score when it is from 0 to 100. Otherwise raise ValueError.",
        "starter": "def set_score(score):\n    pass\n",
        "tests": [
          {
            "name": "ok",
            "setup": "",
            "code": "assert set_score(0) == 0 and set_score(100) == 100"
          },
          {
            "name": "high",
            "setup": "",
            "code": "raised = False\ntry:\n    set_score(101)\nexcept ValueError:\n    raised = True\nassert raised, \"expected ValueError\""
          },
          {
            "name": "low",
            "setup": "",
            "code": "raised = False\ntry:\n    set_score(-1)\nexcept ValueError:\n    raised = True\nassert raised, \"expected ValueError\""
          }
        ]
      },
      {
        "title": "Parse a score",
        "prompt": "Define parse_score(text). Return the int, or None when the text is not an integer.",
        "starter": "def parse_score(text):\n    pass\n",
        "tests": [
          {
            "name": "number",
            "setup": "",
            "code": "assert parse_score(\"95\") == 95"
          },
          {
            "name": "word",
            "setup": "",
            "code": "assert parse_score(\"nope\") is None"
          },
          {
            "name": "spaces",
            "setup": "",
            "code": "assert parse_score(\" 4 \") == 4"
          }
        ]
      },
      {
        "title": "Empty scores",
        "prompt": "Define require_scores(scores). Raise ValueError when scores is empty. Otherwise return the list.",
        "starter": "def require_scores(scores):\n    pass\n",
        "tests": [
          {
            "name": "kept",
            "setup": "",
            "code": "assert require_scores([80]) == [80]"
          },
          {
            "name": "empty",
            "setup": "",
            "code": "raised = False\ntry:\n    require_scores([])\nexcept ValueError:\n    raised = True\nassert raised, \"expected ValueError\""
          }
        ]
      }
    ],
    "11": [
      {
        "title": "Average in a module",
        "prompt": "Define average(scores). Return the mean of a non-empty list.",
        "starter": "def average(scores):\n    pass\n",
        "tests": [
          {
            "name": "class",
            "setup": "",
            "code": "assert abs(average([80, 90, 100]) - 90) < 1e-6"
          }
        ]
      },
      {
        "title": "Hypotenuse",
        "prompt": "Define hypotenuse(a, b). Use math.sqrt and return the distance.",
        "starter": "def hypotenuse(a, b):\n    pass\n",
        "tests": [
          {
            "name": "3-4-5",
            "setup": "",
            "code": "assert abs(hypotenuse(3, 4) - 5) < 1e-6"
          },
          {
            "name": "zero",
            "setup": "",
            "code": "assert hypotenuse(0, 0) == 0"
          }
        ]
      },
      {
        "title": "Circle area",
        "prompt": "Define circle_area(radius). Return math.pi times radius squared.",
        "starter": "def circle_area(radius):\n    pass\n",
        "tests": [
          {
            "name": "radius 2",
            "setup": "",
            "code": "import math\nassert abs(circle_area(2) - math.pi * 4) < 1e-6"
          },
          {
            "name": "radius 0",
            "setup": "",
            "code": "assert circle_area(0) == 0"
          }
        ]
      },
      {
        "title": "Mean from statistics",
        "prompt": "Define mean_of(numbers). Return statistics.mean(numbers).",
        "starter": "def mean_of(numbers):\n    pass\n",
        "tests": [
          {
            "name": "three",
            "setup": "",
            "code": "assert abs(mean_of([1, 2, 3]) - 2) < 1e-6"
          },
          {
            "name": "same",
            "setup": "",
            "code": "assert mean_of([4, 4, 4]) == 4"
          }
        ]
      }
    ],
    "12": [
      {
        "title": "Average",
        "prompt": "Define average(scores). Return the mean of a non-empty list of numbers.",
        "starter": "def average(scores):\n    pass\n",
        "tests": [
          {
            "name": "three",
            "setup": "",
            "code": "assert abs(average([80, 90, 100]) - 90) < 1e-6"
          }
        ]
      },
      {
        "title": "Parse a CSV row",
        "prompt": "Define parse_row(line). A valid line is name,score. Return a dictionary with name and integer score. Return None when the score is not an integer.",
        "starter": "def parse_row(line):\n    pass\n",
        "tests": [
          {
            "name": "valid",
            "setup": "",
            "code": "assert parse_row(\"Ana,95\") == {\"name\": \"Ana\", \"score\": 95}"
          },
          {
            "name": "spaces",
            "setup": "",
            "code": "assert parse_row(\" Ben , 70 \") == {\"name\": \"Ben\", \"score\": 70}"
          },
          {
            "name": "bad score",
            "setup": "",
            "code": "assert parse_row(\"Ana,nope\") is None"
          }
        ]
      },
      {
        "title": "Keep valid rows",
        "prompt": "Define valid_rows(lines). Parse each line with the same name,score rule and return only the valid dictionaries.",
        "starter": "def valid_rows(lines):\n    pass\n",
        "tests": [
          {
            "name": "skip bad",
            "setup": "",
            "code": "assert valid_rows([\"Ana,95\", \"Ben,nope\", \"Cole,80\"]) == [{\"name\": \"Ana\", \"score\": 95}, {\"name\": \"Cole\", \"score\": 80}]"
          }
        ]
      },
      {
        "title": "Class average",
        "prompt": "Define class_average(rows). rows contains dictionaries with score. Return the mean score.",
        "starter": "def class_average(rows):\n    pass\n",
        "tests": [
          {
            "name": "two",
            "setup": "",
            "code": "assert abs(class_average([{\"score\": 80}, {\"score\": 100}]) - 90) < 1e-6"
          }
        ]
      },
      {
        "title": "Report sentence",
        "prompt": "Define report(rows). Return Count: N, average: X.Y with one decimal place.",
        "starter": "def report(rows):\n    pass\n",
        "tests": [
          {
            "name": "two students",
            "setup": "",
            "code": "assert report([{\"score\": 80}, {\"score\": 100}]) == \"Count: 2, average: 90.0\""
          },
          {
            "name": "one",
            "setup": "",
            "code": "assert report([{\"score\": 75}]) == \"Count: 1, average: 75.0\""
          }
        ]
      }
    ]
  },
  "fundamentals-ii": {
    "01": [
      {
        "title": "Passing names",
        "prompt": "Define passing_names(records, minimum). Return the names whose score is at least minimum.",
        "starter": "def passing_names(records, minimum):\n    pass\n",
        "tests": [
          {
            "name": "one",
            "setup": "",
            "code": "assert passing_names([{\"name\": \"Ana\", \"score\": 90}, {\"name\": \"Ben\", \"score\": 60}], 75) == [\"Ana\"]"
          },
          {
            "name": "boundary",
            "setup": "",
            "code": "assert passing_names([{\"name\": \"Ana\", \"score\": 75}], 75) == [\"Ana\"]"
          }
        ]
      },
      {
        "title": "Numbers from text",
        "prompt": "Define numbers_from_text(text). Read one integer per line. Skip lines that are not integers.",
        "starter": "def numbers_from_text(text):\n    pass\n",
        "tests": [
          {
            "name": "skip a word",
            "setup": "",
            "code": "assert numbers_from_text(\"80\\nnope\\n100\\n\") == [80, 100]"
          },
          {
            "name": "blank line",
            "setup": "",
            "code": "assert numbers_from_text(\"\\n4\\n\") == [4]"
          }
        ]
      },
      {
        "title": "Summarize",
        "prompt": "Define summarize(scores). Return Count: N, average: X.Y with one decimal.",
        "starter": "def summarize(scores):\n    pass\n",
        "tests": [
          {
            "name": "three",
            "setup": "",
            "code": "assert summarize([80, 90, 100]) == \"Count: 3, average: 90.0\""
          }
        ]
      },
      {
        "title": "Safe average",
        "prompt": "Define safe_average(scores). Return the mean, or None when scores is empty.",
        "starter": "def safe_average(scores):\n    pass\n",
        "tests": [
          {
            "name": "values",
            "setup": "",
            "code": "assert abs(safe_average([10, 20]) - 15) < 1e-6"
          },
          {
            "name": "empty",
            "setup": "",
            "code": "assert safe_average([]) is None"
          }
        ]
      }
    ],
    "02": [
      {
        "title": "A passing student",
        "prompt": "Define class Student with __init__(self, name, score) and passed(self). passed returns True when score is at least 75.",
        "starter": "class Student:\n    def __init__(self, name, score):\n        self.name = name\n        self.score = score\n\n    def passed(self):\n        pass\n",
        "tests": [
          {
            "name": "pass",
            "setup": "",
            "code": "assert Student('Ana', 95).passed() is True"
          },
          {
            "name": "fail",
            "setup": "",
            "code": "assert Student('Ben', 74).passed() is False"
          },
          {
            "name": "edge",
            "setup": "",
            "code": "assert Student('Cole', 75).passed() is True"
          }
        ]
      },
      {
        "title": "Score changes go through a method",
        "prompt": "Add get_score and set_score to Student. set_score raises ValueError when the score is outside 0 to 100.",
        "starter": "class Student:\n    def __init__(self, name, score):\n        self.name = name\n        self._score = score\n\n    def get_score(self):\n        pass\n\n    def set_score(self, score):\n        pass\n",
        "tests": [
          {
            "name": "update",
            "setup": "",
            "code": "s = Student('Ana', 90)\ns.set_score(93)\nassert s.get_score() == 93"
          },
          {
            "name": "reject",
            "setup": "",
            "code": "s = Student('Ana', 90)\nraised = False\ntry:\n    s.set_score(120)\nexcept ValueError:\n    raised = True\nassert raised and s.get_score() == 90"
          }
        ]
      },
      {
        "title": "Graduate students",
        "prompt": "Define Student.passed at 75 and GradStudent(Student) whose passed is True only at 80 or above.",
        "starter": "class Student:\n    def __init__(self, name, score):\n        self.name = name\n        self.score = score\n\n    def passed(self):\n        return self.score >= 75\n\nclass GradStudent(Student):\n    def passed(self):\n        pass\n",
        "tests": [
          {
            "name": "same score",
            "setup": "",
            "code": "assert Student('Ana', 78).passed() is True and GradStudent('Ben', 78).passed() is False"
          },
          {
            "name": "graduate pass",
            "setup": "",
            "code": "assert GradStudent('Cole', 80).passed() is True"
          }
        ]
      },
      {
        "title": "One list, two classes",
        "prompt": "Define who_passed(people). Return the names for which passed() is True. Include both Student and GradStudent in your file.",
        "starter": "class Student:\n    def __init__(self, name, score):\n        self.name = name\n        self.score = score\n\n    def passed(self):\n        return self.score >= 75\n\nclass GradStudent(Student):\n    def passed(self):\n        return self.score >= 80\n\ndef who_passed(people):\n    pass\n",
        "tests": [
          {
            "name": "mixed",
            "setup": "",
            "code": "people = [Student('Ana', 78), GradStudent('Ben', 78), GradStudent('Cole', 91)]\nassert who_passed(people) == ['Ana', 'Cole']"
          }
        ]
      }
    ],
    "03": [
      {
        "title": "Factorial",
        "prompt": "Define factorial(n). Use recursion. factorial(0) and factorial(1) are 1.",
        "starter": "def factorial(n):\n    pass\n",
        "tests": [
          {
            "name": "zero",
            "setup": "",
            "code": "assert factorial(0) == 1"
          },
          {
            "name": "five",
            "setup": "",
            "code": "assert factorial(5) == 120"
          },
          {
            "name": "three",
            "setup": "",
            "code": "assert factorial(3) == 6"
          }
        ]
      },
      {
        "title": "Recursive sum",
        "prompt": "Define recursive_sum(numbers). An empty list sums to 0. Otherwise add the first item to the sum of the rest.",
        "starter": "def recursive_sum(numbers):\n    pass\n",
        "tests": [
          {
            "name": "empty",
            "setup": "",
            "code": "assert recursive_sum([]) == 0"
          },
          {
            "name": "list",
            "setup": "",
            "code": "assert recursive_sum([1, 2, 3, 4]) == 10"
          },
          {
            "name": "one",
            "setup": "",
            "code": "assert recursive_sum([8]) == 8"
          }
        ]
      },
      {
        "title": "Apply a rule",
        "prompt": "Define apply_rule(scores, rule). Return a list of rule(score) for each score.",
        "starter": "def apply_rule(scores, rule):\n    pass\n",
        "tests": [
          {
            "name": "bonus",
            "setup": "",
            "code": "assert apply_rule([80, 90], lambda score: score + 5) == [85, 95]"
          },
          {
            "name": "empty",
            "setup": "",
            "code": "assert apply_rule([], lambda score: score) == []"
          }
        ]
      },
      {
        "title": "Annotated average",
        "prompt": "Define average(scores: list[float]) -> float. Return the mean. The annotations must use list[float] and float.",
        "starter": "def average(scores: list[float]) -> float:\n    pass\n",
        "tests": [
          {
            "name": "value",
            "setup": "",
            "code": "assert abs(average([80, 90, 100]) - 90) < 1e-6"
          },
          {
            "name": "annotations",
            "setup": "",
            "code": "assert average.__annotations__.get('scores') == list[float]\nassert average.__annotations__.get('return') == float"
          }
        ]
      }
    ],
    "04": [
      {
        "title": "Dotted module name",
        "prompt": "Define dotted(path). Turn gradebook/stats.py into gradebook.stats, and app.py into app.",
        "starter": "def dotted(path):\n    pass\n",
        "tests": [
          {
            "name": "package",
            "setup": "",
            "code": "assert dotted(\"gradebook/stats.py\") == \"gradebook.stats\""
          },
          {
            "name": "file",
            "setup": "",
            "code": "assert dotted(\"app.py\") == \"app\""
          },
          {
            "name": "nested",
            "setup": "",
            "code": "assert dotted(\"a/b/c.py\") == \"a.b.c\""
          }
        ]
      },
      {
        "title": "Package marker",
        "prompt": "Define is_package_marker(filename). Return True only for __init__.py.",
        "starter": "def is_package_marker(filename):\n    pass\n",
        "tests": [
          {
            "name": "init",
            "setup": "",
            "code": "assert is_package_marker(\"__init__.py\") is True"
          },
          {
            "name": "other",
            "setup": "",
            "code": "assert is_package_marker(\"stats.py\") is False"
          }
        ]
      },
      {
        "title": "Requirement name",
        "prompt": "Define requirement_name(line). From requests==2.31.0 return requests. A name with no version is unchanged.",
        "starter": "def requirement_name(line):\n    pass\n",
        "tests": [
          {
            "name": "pinned",
            "setup": "",
            "code": "assert requirement_name(\"requests==2.31.0\") == \"requests\""
          },
          {
            "name": "plain",
            "setup": "",
            "code": "assert requirement_name(\"requests\") == \"requests\""
          },
          {
            "name": "spaces",
            "setup": "",
            "code": "assert requirement_name(\"  rich ==13 \") == \"rich\""
          }
        ]
      },
      {
        "title": "Import line",
        "prompt": "Define import_line(dotted_name). Return from gradebook.stats import average when given gradebook.stats and average is the function name you pass separately: import_line(module, function).",
        "starter": "def import_line(module, function):\n    pass\n",
        "tests": [
          {
            "name": "stats",
            "setup": "",
            "code": "assert import_line(\"gradebook.stats\", \"average\") == \"from gradebook.stats import average\""
          }
        ]
      }
    ],
    "05": [
      {
        "title": "Square root",
        "prompt": "Define square_root(n). Return math.sqrt(n).",
        "starter": "def square_root(n):\n    pass\n",
        "tests": [
          {
            "name": "81",
            "setup": "",
            "code": "assert square_root(81) == 9"
          },
          {
            "name": "zero",
            "setup": "",
            "code": "assert square_root(0) == 0"
          }
        ]
      },
      {
        "title": "Format a timestamp",
        "prompt": "Define format_stamp(when). when is a datetime. Return it as YYYY-MM-DD HH:MM.",
        "starter": "def format_stamp(when):\n    pass\n",
        "tests": [
          {
            "name": "fixed moment",
            "setup": "",
            "code": "from datetime import datetime\nassert format_stamp(datetime(2026, 9, 30, 14, 5)) == '2026-09-30 14:05'"
          }
        ]
      },
      {
        "title": "Seeded choice",
        "prompt": "Define choose(items, seed). Seed random with seed and return random.choice(items).",
        "starter": "def choose(items, seed):\n    pass\n",
        "tests": [
          {
            "name": "same seed",
            "setup": "",
            "code": "import random\nrandom.seed(1)\nexpected = random.choice(['Ana', 'Ben', 'Cole'])\nassert choose(['Ana', 'Ben', 'Cole'], 1) == expected"
          }
        ]
      },
      {
        "title": "Copy a file",
        "prompt": "Define copy_note(source, destination). Copy the file and leave the original in place.",
        "starter": "def copy_note(source, destination):\n    pass\n",
        "tests": [
          {
            "name": "copy",
            "setup": "",
            "code": "open('notes.txt','w').write('Class notes\\n')\ncopy_note('notes.txt', 'notes-backup.txt')\nassert open('notes.txt').read() == 'Class notes\\n'\nassert open('notes-backup.txt').read() == 'Class notes\\n'"
          }
        ]
      }
    ],
    "06": [
      {
        "title": "Dump JSON",
        "prompt": "Define to_json(data). Return a JSON string. Keep non-ASCII characters as themselves.",
        "starter": "def to_json(data):\n    pass\n",
        "tests": [
          {
            "name": "dict",
            "setup": "",
            "code": "import json\nassert json.loads(to_json({\"name\": \"Ana\"})) == {\"name\": \"Ana\"}"
          },
          {
            "name": "list",
            "setup": "",
            "code": "import json\nassert json.loads(to_json([1, 2])) == [1, 2]"
          }
        ]
      },
      {
        "title": "Names from JSON",
        "prompt": "Define names_from_json(text). text is JSON with a students list of name fields. Return the names.",
        "starter": "def names_from_json(text):\n    pass\n",
        "tests": [
          {
            "name": "two",
            "setup": "",
            "code": "assert names_from_json('{\"students\": [{\"name\": \"Ana\"}, {\"name\": \"Ben\"}]}') == [\"Ana\", \"Ben\"]"
          }
        ]
      },
      {
        "title": "Names from XML",
        "prompt": "Define names_from_xml(text). Read student elements and return each name.",
        "starter": "def names_from_xml(text):\n    pass\n",
        "tests": [
          {
            "name": "one",
            "setup": "",
            "code": "assert names_from_xml(\"<class><student><name>Ana</name></student></class>\") == [\"Ana\"]"
          },
          {
            "name": "two",
            "setup": "",
            "code": "assert names_from_xml(\"<class><student><name>Ana</name></student><student><name>Ben</name></student></class>\") == [\"Ana\", \"Ben\"]"
          }
        ]
      },
      {
        "title": "Scores from CSV text",
        "prompt": "Define csv_scores(text). text includes a header name,score. Return the scores as integers.",
        "starter": "def csv_scores(text):\n    pass\n",
        "tests": [
          {
            "name": "two",
            "setup": "",
            "code": "assert csv_scores(\"name,score\\nAna,95\\nBen,70\\n\") == [95, 70]"
          }
        ]
      }
    ],
    "07": [
      {
        "title": "Create the students table",
        "prompt": "Define create_students(connection). Create table students with id INTEGER PRIMARY KEY, name TEXT, and score INTEGER if it does not exist.",
        "starter": "def create_students(connection):\n    pass\n",
        "tests": [
          {
            "name": "table exists",
            "setup": "",
            "code": "import sqlite3\nconn = sqlite3.connect(':memory:')\ncreate_students(conn)\nrow = conn.execute(\"SELECT name FROM sqlite_master WHERE type='table' AND name='students'\").fetchone()\nassert row is not None, 'students table missing'"
          }
        ]
      },
      {
        "title": "Insert a student",
        "prompt": "Define insert_student(connection, name, score). The table already exists. Insert one row and commit.",
        "starter": "def insert_student(connection, name, score):\n    pass\n",
        "tests": [
          {
            "name": "row stored",
            "setup": "",
            "code": "import sqlite3\nconn = sqlite3.connect(':memory:')\nconn.execute('CREATE TABLE students (id INTEGER PRIMARY KEY, name TEXT, score INTEGER)')\ninsert_student(conn, 'Ana', 95)\nrow = conn.execute('SELECT name, score FROM students').fetchone()\nassert row == ('Ana', 95)"
          }
        ]
      },
      {
        "title": "Passing names from SQL",
        "prompt": "Define passing_students(connection, minimum). Return the names with score >= minimum, in query order.",
        "starter": "def passing_students(connection, minimum):\n    pass\n",
        "tests": [
          {
            "name": "filter",
            "setup": "",
            "code": "import sqlite3\nconn = sqlite3.connect(':memory:')\nconn.execute('CREATE TABLE students (id INTEGER PRIMARY KEY, name TEXT, score INTEGER)')\nconn.executemany('INSERT INTO students (name, score) VALUES (?, ?)', [('Ben', 70), ('Ana', 95)])\nconn.commit()\nassert passing_students(conn, 75) == ['Ana']"
          }
        ]
      },
      {
        "title": "Update and delete",
        "prompt": "Define update_score(connection, name, score) and delete_student(connection, name). Both should commit.",
        "starter": "def update_score(connection, name, score):\n    pass\n\ndef delete_student(connection, name):\n    pass\n",
        "tests": [
          {
            "name": "update",
            "setup": "",
            "code": "import sqlite3\nconn = sqlite3.connect(':memory:')\nconn.execute('CREATE TABLE students (id INTEGER PRIMARY KEY, name TEXT, score INTEGER)')\nconn.execute('INSERT INTO students (name, score) VALUES (?, ?)', ('Ana', 90))\nconn.commit()\nupdate_score(conn, 'Ana', 97)\nassert conn.execute('SELECT score FROM students').fetchone()[0] == 97"
          },
          {
            "name": "delete",
            "setup": "",
            "code": "import sqlite3\nconn = sqlite3.connect(':memory:')\nconn.execute('CREATE TABLE students (id INTEGER PRIMARY KEY, name TEXT, score INTEGER)')\nconn.execute('INSERT INTO students (name, score) VALUES (?, ?)', ('Ana', 90))\nconn.commit()\ndelete_student(conn, 'Ana')\nassert conn.execute('SELECT COUNT(*) FROM students').fetchone()[0] == 0"
          }
        ]
      }
    ],
    "08": [
      {
        "title": "Status label",
        "prompt": "Define status_label(code). Return Ready for 200, Not found for 404, and Error for anything else.",
        "starter": "def status_label(code):\n    pass\n",
        "tests": [
          {
            "name": "200",
            "setup": "",
            "code": "assert status_label(200) == \"Ready\""
          },
          {
            "name": "404",
            "setup": "",
            "code": "assert status_label(404) == \"Not found\""
          },
          {
            "name": "500",
            "setup": "",
            "code": "assert status_label(500) == \"Error\""
          }
        ]
      },
      {
        "title": "Successful response",
        "prompt": "Define is_success(code). Return True for status codes from 200 through 299.",
        "starter": "def is_success(code):\n    pass\n",
        "tests": [
          {
            "name": "200",
            "setup": "",
            "code": "assert is_success(200) is True"
          },
          {
            "name": "204",
            "setup": "",
            "code": "assert is_success(204) is True"
          },
          {
            "name": "404",
            "setup": "",
            "code": "assert is_success(404) is False"
          }
        ]
      },
      {
        "title": "Read a user payload",
        "prompt": "Define read_user(payload). payload is a dictionary. Return name and email separated by a space.",
        "starter": "def read_user(payload):\n    pass\n",
        "tests": [
          {
            "name": "user",
            "setup": "",
            "code": "assert read_user({\"name\": \"Ana\", \"email\": \"ana@school.edu\"}) == \"Ana ana@school.edu\""
          }
        ]
      },
      {
        "title": "Build a resource URL",
        "prompt": "Define build_url(resource, item_id). Return https://jsonplaceholder.typicode.com/{resource}/{item_id}.",
        "starter": "def build_url(resource, item_id):\n    pass\n",
        "tests": [
          {
            "name": "user 1",
            "setup": "",
            "code": "assert build_url(\"users\", 1) == \"https://jsonplaceholder.typicode.com/users/1\""
          },
          {
            "name": "posts",
            "setup": "",
            "code": "assert build_url(\"posts\", 4) == \"https://jsonplaceholder.typicode.com/posts/4\""
          }
        ]
      }
    ],
    "09": [
      {
        "title": "Average that refuses an empty list",
        "prompt": "Define average(scores). Raise AssertionError when scores is empty. Otherwise return the mean.",
        "starter": "def average(scores):\n    pass\n",
        "tests": [
          {
            "name": "mean",
            "setup": "",
            "code": "assert abs(average([80, 90, 100]) - 90) < 1e-6"
          },
          {
            "name": "empty",
            "setup": "",
            "code": "raised = False\ntry:\n    average([])\nexcept AssertionError:\n    raised = True\nassert raised, 'expected AssertionError'"
          }
        ]
      },
      {
        "title": "Count passing scores",
        "prompt": "Define count_passing(scores, minimum). Return how many scores are at least minimum.",
        "starter": "def count_passing(scores, minimum):\n    pass\n",
        "tests": [
          {
            "name": "two",
            "setup": "",
            "code": "assert count_passing([70, 75, 90], 75) == 2"
          },
          {
            "name": "none",
            "setup": "",
            "code": "assert count_passing([], 75) == 0"
          }
        ]
      },
      {
        "title": "Clamp a score",
        "prompt": "Define clamp_score(score). Return the score limited to the range 0 through 100.",
        "starter": "def clamp_score(score):\n    pass\n",
        "tests": [
          {
            "name": "inside",
            "setup": "",
            "code": "assert clamp_score(80) == 80"
          },
          {
            "name": "low",
            "setup": "",
            "code": "assert clamp_score(-4) == 0"
          },
          {
            "name": "high",
            "setup": "",
            "code": "assert clamp_score(140) == 100"
          }
        ]
      },
      {
        "title": "Describe a check",
        "prompt": "Define describe_result(passed, actual, expected). If passed is true, return ok. Otherwise return expected E, got A.",
        "starter": "def describe_result(passed, actual, expected):\n    pass\n",
        "tests": [
          {
            "name": "ok",
            "setup": "",
            "code": "assert describe_result(True, 90, 90) == \"ok\""
          },
          {
            "name": "mismatch",
            "setup": "",
            "code": "assert describe_result(False, 80, 90) == \"expected 90, got 80\""
          }
        ]
      }
    ],
    "10": [
      {
        "title": "Make a commit record",
        "prompt": "Define make_commit(message, files). Return a dictionary with message and a list copy of files.",
        "starter": "def make_commit(message, files):\n    pass\n",
        "tests": [
          {
            "name": "record",
            "setup": "",
            "code": "commit = make_commit(\"Add grade calculation\", [\"gradebook.py\"])\nassert commit == {\"message\": \"Add grade calculation\", \"files\": [\"gradebook.py\"]}"
          },
          {
            "name": "copy",
            "setup": "",
            "code": "files = [\"a.py\"]\ncommit = make_commit(\"Start\", files)\nfiles.append(\"b.py\")\nassert commit[\"files\"] == [\"a.py\"]"
          }
        ]
      },
      {
        "title": "Current branch",
        "prompt": "Define on_branch(repo, name). repo is a dictionary with branch. Return True when that is the current branch.",
        "starter": "def on_branch(repo, name):\n    pass\n",
        "tests": [
          {
            "name": "main",
            "setup": "",
            "code": "assert on_branch({\"branch\": \"main\"}, \"main\") is True"
          },
          {
            "name": "other",
            "setup": "",
            "code": "assert on_branch({\"branch\": \"main\"}, \"feature-report\") is False"
          }
        ]
      },
      {
        "title": "Add a commit",
        "prompt": "Define add_commit(repo, commit). Append commit to repo['commits'] and return the repo.",
        "starter": "def add_commit(repo, commit):\n    pass\n",
        "tests": [
          {
            "name": "appended",
            "setup": "",
            "code": "repo = {\"commits\": []}\nadd_commit(repo, {\"message\": \"Start\"})\nassert repo[\"commits\"] == [{\"message\": \"Start\"}]"
          }
        ]
      },
      {
        "title": "Commit messages",
        "prompt": "Define messages(repo). Return the message of each commit, in order.",
        "starter": "def messages(repo):\n    pass\n",
        "tests": [
          {
            "name": "two",
            "setup": "",
            "code": "repo = {\"commits\": [{\"message\": \"Start\"}, {\"message\": \"Add report\"}]}\nassert messages(repo) == [\"Start\", \"Add report\"]"
          },
          {
            "name": "empty",
            "setup": "",
            "code": "assert messages({\"commits\": []}) == []"
          }
        ]
      }
    ],
    "11": [
      {
        "title": "Student rejects a bad score",
        "prompt": "Define class Student. __init__(self, name, score) stores both and raises ValueError when score is outside 0 to 100.",
        "starter": "class Student:\n    def __init__(self, name, score):\n        pass\n",
        "tests": [
          {
            "name": "stores",
            "setup": "",
            "code": "s = Student('Ana', 95)\nassert s.name == 'Ana' and s.score == 95"
          },
          {
            "name": "rejects",
            "setup": "",
            "code": "raised = False\ntry:\n    Student('Ana', 120)\nexcept ValueError:\n    raised = True\nassert raised, 'expected ValueError'"
          }
        ]
      },
      {
        "title": "Who passed",
        "prompt": "Define passing_names(students). students is a list of Student objects with name and score. Return names with score at least 75. Include your Student class.",
        "starter": "class Student:\n    def __init__(self, name, score):\n        self.name = name\n        self.score = score\n\ndef passing_names(students):\n    pass\n",
        "tests": [
          {
            "name": "mixed",
            "setup": "",
            "code": "students = [Student('Ana', 95), Student('Ben', 70)]\nassert passing_names(students) == ['Ana']"
          }
        ]
      },
      {
        "title": "Average score",
        "prompt": "Define average_score(students). Return the mean of their score attributes.",
        "starter": "def average_score(students):\n    pass\n",
        "tests": [
          {
            "name": "two",
            "setup": "",
            "code": "class Student:\n    def __init__(self, name, score):\n        self.score = score\nstudents = [Student('Ana', 80), Student('Ben', 100)]\nassert abs(average_score(students) - 90) < 1e-6"
          }
        ]
      },
      {
        "title": "Summary line",
        "prompt": "Define summary_line(students). Each student has a score. Return Count: N, average: X.Y with one decimal.",
        "starter": "def summary_line(students):\n    pass\n",
        "tests": [
          {
            "name": "two",
            "setup": "",
            "code": "class Student:\n    def __init__(self, name, score):\n        self.score = score\nstudents = [Student('Ana', 80), Student('Ben', 100)]\nassert summary_line(students) == 'Count: 2, average: 90.0'"
          }
        ]
      },
      {
        "title": "Roster rows",
        "prompt": "Define roster(students). Return a list of (name, score) tuples sorted by name. Include a Student class with name and score.",
        "starter": "class Student:\n    def __init__(self, name, score):\n        self.name = name\n        self.score = score\n\ndef roster(students):\n    pass\n",
        "tests": [
          {
            "name": "sorted",
            "setup": "",
            "code": "students = [Student('Ben', 70), Student('Ana', 95)]\nassert roster(students) == [('Ana', 95), ('Ben', 70)]"
          }
        ]
      }
    ]
  }
};
