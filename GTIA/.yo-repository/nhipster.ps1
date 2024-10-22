#!/usr/bin/env pwsh
$basedir=Split-Path $MyInvocation.MyCommand.Definition -Parent

$exe=""
if ($PSVersionTable.PSVersion -lt "6.0" -or $IsWindows) {
  # Fix case when both the Windows and Linux builds of Node
  # are installed in the same directory
  $exe=".exe"
}
$ret=0
if (Test-Path "$basedir/node$exe") {
  # Support pipeline input
  if ($MyInvocation.ExpectingInput) {
    $input | & "$basedir/node$exe"  "$basedir/node_modules/generator-jhipster-nodejs/cli/cli.cjs" $args
  } else {
    & "$basedir/node$exe"  "$basedir/node_modules/generator-jhipster-nodejs/cli/cli.cjs" $args
  }
  $ret=$LASTEXITCODE
} else {
  # Support pipeline input
  if ($MyInvocation.ExpectingInput) {
    $input | & "node$exe"  "$basedir/node_modules/generator-jhipster-nodejs/cli/cli.cjs" $args
  } else {
    & "node$exe"  "$basedir/node_modules/generator-jhipster-nodejs/cli/cli.cjs" $args
  }
  $ret=$LASTEXITCODE
}
exit $ret