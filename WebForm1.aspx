<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="WebForm1.aspx.cs" Inherits="StudentAungularJSWebApp.WebForm1" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" >
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
    <cc1:TabPanel ID="TabEmailWebsiteType" HeaderText="Email & Website" runat="server" meta:resourcekey="TabEmailWebsiteTypeResource1">
		<ContentTemplate>
			<table class="form" cellpadding="0" cellspacing="0" width="100%">
			  <thead>
				  <tr valign="top">
					<td colspan="1" align="left"><h6><asp:Literal ID="Literal6" runat="server" Text="<%$ Resources:EmailWebsiteBusinessHeader_Text %>" /></h6></td>
					<td colspan="1" align="right"><span class="asterisk">*</span> <asp:Localize ID="Localize3" runat="server" Text="<%$ Resources:AffiliateResources, RequiredFieldNote %>" /></td>
				  </tr>
				  <tr valign="top">
					<td colspan="2" align="left" style="border-bottom: 1px dotted #CCCCCC;"></td>
				  </tr>
			  </thead>
			  <tbody>
			  <tr valign="top">
				<td class="lbl"><asp:Label ID="LblEmailAddress" runat="server" AssociatedControlID="EmailAddress" Text="Address 1:" meta:resourcekey="LblEmailAddressResource" /></td>
				<td class="fld">
				    <asp:TextBox ID="EmailAddress" runat="server" Width="280px" Text="<%# AccountInfoMailing.Email %>" Enabled="false" ontextchanged="EmailAddress_TextChanged" meta:resourcekey="EmailAddressResource" />
				    <asp:RequiredFieldValidator ID="RequiredEmailAddress" ControlToValidate="EmailAddress" ValidationGroup="EMAILURL"
						runat="server" Display="Dynamic" meta:resourcekey="RequiredEmailAddressResource" 
						Text="&lt;br /&gt;'Email address' is a required field."></asp:RequiredFieldValidator>
				    <asp:RegularExpressionValidator ID="ValidateEmailAddress" ControlToValidate="EmailAddress" ValidationGroup="EMAILURL"
						ValidationExpression="^(?:[a-zA-Z0-9_'^&amp;/+-])+(?:\.(?:[a-zA-Z0-9_'^&amp;/+-])+)*@(?:(?:\[?(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))\.){3}(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\]?)|(?:[a-zA-Z0-9-]+\.)+(?:[a-zA-Z]){2,}\.?)$" 
						runat="server" Display="Dynamic" meta:resourcekey="ValidateEmailAddressResource" 
						Text="&lt;br /&gt;Please enter a valid email address."></asp:RegularExpressionValidator>
				    <sesac:CharacterValidator ID="ValidateEmailAddressChars" ControlToValidate="EmailAddress" ValidationGroup="EMAILURL"
						runat="server" Display="Dynamic" meta:resourcekey="ValidateEmailAddressCharsResource" 
						Text="&lt;br /&gt;Special characters and quotation marks are not permitted. If you are copying and pasting from a text editor such as Microsoft Word, please replace punctuation with standard keyboard symbols."></sesac:CharacterValidator>
				</td>
			  </tr>
			  <tr>
			    <td class="lbl"><asp:Label ID="LblWebsite" runat="server" AssociatedControlID="Website" Text="Web Site:" meta:resourcekey="LblWebsiteResource" /></td>
				<td class="fld">
				    <asp:TextBox ID="Website" runat="server" Width="280px" Text="<%# AccountInfoMailing.WebUrl %>" Enabled="false" ontextchanged="Website_TextChanged" meta:resourcekey="WebsiteResource" />
				    <sesac:CharacterValidator ID="ValidateWebsiteChars" ControlToValidate="Website" ValidationGroup="EMAILURL"
						runat="server" Display="Dynamic" meta:resourcekey="ValidateWebsiteCharsResource" 
						Text="&lt;br /&gt;Special characters and quotation marks are not permitted. If you are copying and pasting from a text editor such as Microsoft Word, please replace punctuation with standard keyboard symbols."></sesac:CharacterValidator>
				</td>
			  </tr>
			  <tr valign="top">
				<td class="lbl">&nbsp;</td>
				<td class="fld">&nbsp;</td>
			  </tr>
			  </tbody>
			</table>
		</ContentTemplate>
	</cc1:TabPanel>
    </div>
    </form>
</body>
</html>
