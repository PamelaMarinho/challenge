// Forward reference creates a back reference to a regex that would appear later.
// Are only useful if they're inside a repeated group.
// Then there may arise a case in which the regex engine evaluates the backreference 
// after the group has been matched already.
// Forward reference is supported by JGsoft, .NET, Java, Perl, PCRE, PHP, Delphi and Ruby regex flavors

// Task: consists of tic or tac.
// tic should not be immediate neighbour of itself.
// The first tic must occur only when tac has appeared at least twice before.

var regex = '^(tac){2,}((tic)(?!tic)(tac)*)+$'
var regex = '^(tac){2}((tactic)|(tac))*'